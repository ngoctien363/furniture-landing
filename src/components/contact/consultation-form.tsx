"use client";

import { useEffect, useId, useRef, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Info } from "lucide-react";
import { Button } from "@/components/ui";
import { consultationForm as copy } from "@/data/consultation-form";
import { cn } from "@/lib/utils";

const propertyValues = copy.propertyTypes.map((o) => o.value) as [string, ...string[]];
const requirementValues = copy.requirementOptions.map((o) => o.value) as [string, ...string[]];

/** Vietnamese phone numbers: 0xxxxxxxxx or +84xxxxxxxxx (spaces/dots allowed). */
const PHONE = /^(?:\+?84|0)\d{9,10}$/;

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(1, copy.errors.nameRequired)
    .min(2, copy.errors.nameLength)
    .max(80, copy.errors.nameLength),
  phone: z
    .string()
    .trim()
    .min(1, copy.errors.phoneRequired)
    .refine((v) => PHONE.test(v.replace(/[\s.\-()]/g, "")), copy.errors.phoneInvalid),
  propertyType: z.enum(propertyValues, { error: copy.errors.propertyTypeRequired }),
  area: z
    .string()
    .trim()
    .refine((v) => {
      const n = Number(v.replace(",", "."));
      return v !== "" && Number.isFinite(n) && n >= 10 && n <= 5000;
    }, copy.errors.areaInvalid),
  requirements: z.array(z.enum(requirementValues)).min(1, copy.errors.requirementsRequired),
  message: z.string().max(1000, copy.errors.messageLength).optional(),
});

type FormValues = z.input<typeof schema>;

const fieldBase =
  "block w-full border-0 border-b border-line-strong bg-transparent px-0 py-3 text-base text-charcoal placeholder:text-taupe-deep/60 transition-colors focus:border-charcoal focus:outline-none focus:ring-0 aria-[invalid=true]:border-[#9b3a2e]";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-sm text-[#9b3a2e]">
      {message}
    </p>
  );
}

function Label({ htmlFor, children, optional }: { htmlFor?: string; children: string; optional?: boolean }) {
  const content = (
    <>
      {children}
      {optional ? <span className="ml-2 normal-case tracking-normal text-taupe-deep/80">({copy.optional})</span> : null}
    </>
  );
  return htmlFor ? (
    <label htmlFor={htmlFor} className="eyebrow block text-taupe-deep">
      {content}
    </label>
  ) : (
    <span className="eyebrow block text-taupe-deep">{content}</span>
  );
}

/**
 * Consultation request form — DEMO ONLY.
 * Validates input on the client; nothing is sent or stored anywhere.
 */
export function ConsultationForm() {
  const uid = useId();
  const id = (name: string) => `${uid}-${name}`;
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const successRef = useRef<HTMLHeadingElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitted, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onTouched",
    defaultValues: { name: "", phone: "", area: "", requirements: [], message: "" },
  });

  const messageLength = useWatch({ control, name: "message" })?.length ?? 0;
  const selectedRequirements = useWatch({ control, name: "requirements" }) ?? [];
  const selectedProperty = useWatch({ control, name: "propertyType" });

  useEffect(() => {
    if (status === "done") successRef.current?.focus();
  }, [status]);

  const onSubmit = async () => {
    setStatus("submitting");
    // Demo: simulate latency only. No network request is made.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div role="status" className="border border-line-strong bg-paper p-8 md:p-12">
        <p className="eyebrow flex items-center gap-3 text-taupe-deep">
          <Info aria-hidden className="size-4" strokeWidth={1.5} />
          {copy.demoNotice}
        </p>
        <h3 ref={successRef} tabIndex={-1} className="mt-6 font-display text-h3 outline-none">
          {copy.success.title}
        </h3>
        <p className="mt-4 max-w-xl text-walnut">{copy.success.body}</p>
        <Button
          variant="outline"
          className="mt-10"
          onClick={() => {
            reset();
            setStatus("idle");
          }}
        >
          {copy.success.reset}
        </Button>
      </div>
    );
  }

  const describedBy = (name: keyof FormValues, extra?: string) =>
    [errors[name] ? id(`${name}-error`) : null, extra].filter(Boolean).join(" ") || undefined;

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-10">
      <p className="flex items-start gap-3 border-l-2 border-taupe bg-paper px-5 py-4 text-sm text-walnut">
        <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-taupe-deep" strokeWidth={1.5} />
        {copy.demoNotice}
      </p>

      {isSubmitted && !isValid ? (
        <p role="alert" className="text-sm text-[#9b3a2e]">
          {copy.errorSummary}
        </p>
      ) : null}

      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <Label htmlFor={id("name")}>{copy.fields.name.label}</Label>
          <input
            id={id("name")}
            type="text"
            autoComplete="name"
            placeholder={copy.fields.name.placeholder}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy("name")}
            aria-required
            className={fieldBase}
            {...register("name")}
          />
          <FieldError id={id("name-error")} message={errors.name?.message} />
        </div>
        <div>
          <Label htmlFor={id("phone")}>{copy.fields.phone.label}</Label>
          <input
            id={id("phone")}
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder={copy.fields.phone.placeholder}
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={describedBy("phone")}
            aria-required
            className={fieldBase}
            {...register("phone")}
          />
          <FieldError id={id("phone-error")} message={errors.phone?.message} />
        </div>
      </div>

      <fieldset aria-describedby={describedBy("propertyType")}>
        <legend className="mb-4">
          <Label>{copy.fields.propertyType.label}</Label>
        </legend>
        <div className="flex flex-wrap gap-2">
          {copy.propertyTypes.map((option) => (
            <label
              key={option.value}
              className={cn(
                "eyebrow inline-flex h-11 cursor-pointer items-center border px-5 transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-taupe",
                selectedProperty === option.value
                  ? "border-charcoal bg-charcoal text-ivory"
                  : "border-line-strong hover:border-charcoal",
              )}
            >
              <input type="radio" value={option.value} className="sr-only" {...register("propertyType")} />
              {option.label}
            </label>
          ))}
        </div>
        <FieldError id={id("propertyType-error")} message={errors.propertyType?.message} />
      </fieldset>

      <div className="md:max-w-xs">
        <Label htmlFor={id("area")}>{copy.fields.area.label}</Label>
        <input
          id={id("area")}
          type="text"
          inputMode="decimal"
          placeholder={copy.fields.area.placeholder}
          aria-invalid={errors.area ? true : undefined}
          aria-describedby={describedBy("area")}
          aria-required
          className={fieldBase}
          {...register("area")}
        />
        <FieldError id={id("area-error")} message={errors.area?.message} />
      </div>

      <fieldset aria-describedby={describedBy("requirements")}>
        <legend className="mb-4">
          <Label>{copy.fields.requirements.label}</Label>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {copy.requirementOptions.map((option) => {
            const checked = selectedRequirements.includes(option.value);
            return (
              <label
                key={option.value}
                className={cn(
                  "flex cursor-pointer items-center gap-4 border px-5 py-4 text-sm transition-colors duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-taupe",
                  checked ? "border-charcoal bg-paper" : "border-line-strong hover:border-charcoal",
                )}
              >
                <input type="checkbox" value={option.value} className="sr-only" {...register("requirements")} />
                <span
                  aria-hidden
                  className={cn(
                    "flex size-4 shrink-0 items-center justify-center border",
                    checked ? "border-charcoal bg-charcoal" : "border-line-strong",
                  )}
                >
                  {checked ? <span className="size-1.5 bg-ivory" /> : null}
                </span>
                {option.label}
              </label>
            );
          })}
        </div>
        <FieldError id={id("requirements-error")} message={errors.requirements?.message} />
      </fieldset>

      <div>
        <Label htmlFor={id("message")} optional>
          {copy.fields.message.label}
        </Label>
        <textarea
          id={id("message")}
          rows={4}
          maxLength={1000}
          placeholder={copy.fields.message.placeholder}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy("message", id("message-count"))}
          className={cn(fieldBase, "resize-y")}
          {...register("message")}
        />
        <div className="mt-2 flex justify-between gap-4">
          <FieldError id={id("message-error")} message={errors.message?.message} />
          <p id={id("message-count")} className="ml-auto text-xs tabular-nums text-taupe-deep">
            {messageLength}/1000
          </p>
        </div>
      </div>

      <Button type="submit" size="lg" arrow disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? copy.submitting : copy.submit}
      </Button>
    </form>
  );
}
