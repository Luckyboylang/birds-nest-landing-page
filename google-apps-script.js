/**
 * GOOGLE APPS SCRIPT - TỰ ĐỘNG LƯU ĐƠN HÀNG BIRD'S NEST VÀO GOOGLE SHEETS
 * 
 * Hướng dẫn 3 bước cài đặt (chỉ mất 1 phút):
 * 1. Mở Google Sheets (https://sheets.google.com) -> Tạo trang tính mới đặt tên "Đơn Hàng Bird's Nest".
 * 2. Trên thanh menu, chọn "Tiện ích mở rộng" (Extensions) -> "Apps Script".
 * 3. Xóa code cũ, dán toàn bộ đoạn code này vào -> Bấm "Lưu" (Save).
 * 4. Bấm "Triển khai" (Deploy) -> "Tùy chọn triển khai mới" (New deployment):
 *    - Loại: Chọn "Ứng dụng web" (Web app)
 *    - Ai có quyền truy cập (Who has access): Chọn "Bất kỳ ai" (Anyone)
 *    - Nhấn "Triển khai" (Deploy) -> Cấp quyền tài khoản Google.
 * 5. Copy "URL ứng dụng web" (Web app URL) và gửi cho tôi hoặc dán vào file js/data.js (mục googleSheetWebhookUrl).
 */

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Nếu sheet chưa có tiêu đề, tự động tạo dòng đầu tiên
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Thời Gian", 
        "Họ và Tên", 
        "Số Điện Thoại", 
        "Sản Phẩm Quan Tâm", 
        "Số Lượng", 
        "Ghi Chú Đơn Hàng"
      ]);
      // Format header vàng hoàng gia
      sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#AB1A38").setFontColor("#FFFFFF");
    }

    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
    
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString("vi-VN"),
      "'" + (data.phone ? data.phone : ""), // Thêm dấu ' để giữ nguyên số 0 đầu số điện thoại
      data.name || "",
      data.product || "",
      data.quantity || "",
      data.note || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
