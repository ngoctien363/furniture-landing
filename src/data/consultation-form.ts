/**
 * Consultation form copy and options. Form handling is front-end only
 * (demo): nothing is submitted until a real backend/service is configured.
 */
export const consultationForm = {
  fields: {
    name: { label: "Họ và tên", placeholder: "Nguyễn Văn A" },
    phone: { label: "Số điện thoại", placeholder: "09xx xxx xxx" },
    propertyType: { label: "Loại công trình", placeholder: "Chọn loại công trình" },
    area: { label: "Diện tích dự kiến (m²)", placeholder: "Ví dụ: 120" },
    requirements: { label: "Nhu cầu thiết kế" },
    message: { label: "Lời nhắn thêm", placeholder: "Chia sẻ thêm về ngôi nhà, phong cách hoặc thời gian dự kiến…" },
  },
  propertyTypes: [
    { value: "apartment", label: "Căn hộ" },
    { value: "townhouse", label: "Nhà phố" },
    { value: "villa", label: "Biệt thự" },
    { value: "other", label: "Khác" },
  ],
  requirementOptions: [
    { value: "consultation", label: "Tư vấn thiết kế nội thất" },
    { value: "design-build", label: "Thiết kế và thi công trọn gói" },
    { value: "furniture", label: "Sản xuất và cung cấp đồ nội thất" },
    { value: "construction", label: "Thi công theo bản thiết kế có sẵn" },
  ],
  errors: {
    nameRequired: "Vui lòng nhập họ và tên.",
    nameLength: "Họ và tên cần từ 2 đến 80 ký tự.",
    phoneRequired: "Vui lòng nhập số điện thoại.",
    phoneInvalid: "Số điện thoại chưa đúng định dạng (ví dụ: 0912 345 678).",
    propertyTypeRequired: "Vui lòng chọn loại công trình.",
    areaInvalid: "Vui lòng nhập diện tích từ 10 đến 5.000 m².",
    requirementsRequired: "Vui lòng chọn ít nhất một nhu cầu.",
    messageLength: "Lời nhắn tối đa 1.000 ký tự.",
  },
  requiredHint: "Trường bắt buộc",
  optional: "không bắt buộc",
  submit: "Gửi yêu cầu (demo)",
  submitting: "Đang xử lý…",
  demoNotice: "Chế độ demo — thông tin sẽ không được gửi hoặc lưu lại.",
  success: {
    title: "Biểu mẫu hợp lệ — chưa có yêu cầu nào được gửi",
    body: "Đây là bản demo nên thông tin của bạn không được gửi hay lưu trữ ở bất kỳ đâu. Khi hệ thống tiếp nhận chính thức được kết nối, yêu cầu sẽ được chuyển đến đội ngũ MINH KHOI.",
    reset: "Nhập lại biểu mẫu",
  },
  errorSummary: "Vui lòng kiểm tra lại các trường được đánh dấu.",
} as const;
