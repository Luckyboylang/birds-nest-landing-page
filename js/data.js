/**
 * BIRD'S NEST - LUXURY BRAND DATA & INTERACTIVE PRODUCT CONFIGURATION
 * Kiến trúc tách rời hoàn toàn: Dễ cập nhật giá, thêm sản phẩm, điều chỉnh thông tin liên hệ.
 */

window.BRAND_DATA = {
  brand: {
    name: "BIRD'S NEST",
    vietnameseName: "YẾN SÀO CAO CẤP",
    slogan: "Tinh Hoa Từ Thiên Nhiên – Trao Trọn Sức Khỏe",
    subheadline: "Yến sào cao cấp dành cho những người bạn yêu thương.",
    description: "Chỉn chu trong từng lựa chọn, tinh tế trong từng món quà – BIRD'S NEST mang đến những sản phẩm yến sào phù hợp để chăm sóc sức khỏe và gửi trao yêu thương.",
    story: "Chúng tôi tin rằng một món quà ý nghĩa không chỉ nằm ở giá trị vật chất, mà còn nằm ở sự quan tâm dành cho sức khỏe của người nhận. BIRD'S NEST được xây dựng với mong muốn mang những sản phẩm yến sào chỉn chu, tinh tế và phù hợp đến gần hơn với mỗi gia đình.",
    coreValues: [
      {
        number: "01",
        title: "CHẤT LƯỢNG",
        subtitle: "Độ tinh sạch & Vẻ đẹp tự nhiên",
        description: "Từng tai yến được thợ lành nghề làm sạch thủ công tỉ mỉ, bảo toàn từng sợi yến dày dặn, nguyên bản không chất tẩy trắng."
      },
      {
        number: "02",
        title: "TẬN TÂM",
        subtitle: "Tư vấn chu đáo theo từng nhu cầu",
        description: "Lắng nghe thể trạng và mục đích của quý khách (bồi bổ người lớn tuổi, chăm sóc mẹ bầu, hay biếu tặng đối tác) để gợi ý set quà chuẩn xác."
      },
      {
        number: "03",
        title: "TIN CẬY",
        subtitle: "Chính sách minh bạch & An tâm tuyệt đối",
        description: "Kiểm tra hàng chu đáo trước khi thanh toán. Đồng hành trọn đời cùng trải nghiệm sức khỏe của mỗi gia đình."
      }
    ]
  },

  contact: {
    address: "[ĐỊA CHỈ]",
    addressNote: "Vui lòng cập nhật địa chỉ showroom / kho hàng thực tế của thương hiệu",
    hotline: "[SỐ ĐIỆN THOẠI]",
    hotlineTel: "tel:1900xxxx",
    zalo: "[LINK ZALO]",
    zaloUrl: "https://zalo.me/",
    facebook: "[LINK FACEBOOK]",
    facebookUrl: "https://facebook.com/",
    tiktok: "[LINK TIKTOK]",
    tiktokUrl: "https://tiktok.com/",
    email: "[EMAIL]",
    emailMailto: "mailto:contact@birdnest.vn",
    workingHours: "[GIỜ HOẠT ĐỘNG]",
    workingHoursDetail: "Thứ Hai – Chủ Nhật: 08:00 – 21:00",
    mapsUrl: "[LINK GOOGLE MAPS]",
    mapsEmbed: ""
  },

  orderConfig: {
    // 1. Gửi thông báo đơn hàng tự động về Email qua Netlify Forms
    enableNetlifyEmail: true,
    notificationEmail: "nlx.technical.sales@gmail.com",

    // 2. Tự động lưu đơn hàng vào Google Sheets (Bảng tính Google)
    // Dán URL Web App của Google Apps Script vào đây để kích hoạt
    googleSheetWebhookUrl: ""
  },

  products: [
    {
      id: "yen-chung",
      name: "Sản phẩm Yến Chưng",
      subtitle: "Yến Chưng Tươi Thượng Hạng 70ml",
      category: "yenchung",
      badge: "Bán chạy nhất",
      image: "images/products/yen-chung.jpg",
      shortDesc: "Yến chưng tươi giữ trọn độ sánh dai thanh mát của sợi yến, tiện lợi thưởng thức mỗi ngày.",
      fullDesc: "Sản phẩm Yến Chưng tươi từ BIRD'S NEST được chế biến theo quy trình chỉn chu, sợi yến nở mềm mọng, giữ trọn hương vị thanh mát tự nhiên. Kết hợp hài hòa cùng đường phèn thanh tao, táo đỏ và hạt sen bổ dưỡng.",
      variants: [
        {
          code: "6hu",
          label: "Hộp 6 Hũ",
          weight: "70ml / hũ",
          spec: "Hộp quà 6 hũ kèm túi xách",
          price: "Liên hệ để nhận giá",
          perk: "Tặng kèm túi giấy đỏ quai vàng"
        },
        {
          code: "10hu",
          label: "Set 10 Hũ Thượng Uyển",
          weight: "70ml / hũ",
          spec: "Hộp cứng sang trọng 10 hũ",
          price: "Liên hệ để nhận giá",
          perk: "Tặng thiệp dập kim & freeship toàn quốc"
        }
      ],
      highlights: [
        "Sợi yến tươi nguyên chất nở đều, độ sánh cao",
        "Chưng cất vô trùng, không chất bảo quản",
        "Tiện lợi mở nắp dùng ngay, phù hợp mọi thành viên gia đình"
      ]
    },
    {
      id: "yen-to-cao-cap",
      name: "Yến Tổ Cao Cấp",
      subtitle: "Tai Yến Tinh Chế Chọn Lọc Thượng Hạng",
      category: "yento",
      badge: "Thượng Hạng Cung Đình",
      image: "images/products/yen-to-cao-cap.jpg",
      shortDesc: "Tổ yến tai nguyên bản tuyển chọn kỹ lưỡng, sợi yến dày dặn, màu sắc trắng ngà tự nhiên.",
      fullDesc: "Yến Tổ Cao Cấp được tuyển lựa khắt khe từ những tổ yến dày dặn, hình dáng tai yến nguyên vẹn, độ sạch cao. Sản phẩm được đặt trong hộp trưng bày sang trọng lót vải lụa đỏ, xứng đáng là món quà tri ân đẳng cấp.",
      variants: [
        {
          code: "50g",
          label: "Hộp 50g Tinh Chế",
          weight: "Khối lượng: 50g (5–6 tai yến)",
          spec: "Hộp nhung đỏ viền kim sang trọng",
          price: "Liên hệ để nhận giá",
          perk: "Tặng đường phèn & nhíp gắp chuyên dụng"
        },
        {
          code: "100g",
          label: "Hộp 100g Hoàng Kim VIP",
          weight: "Khối lượng: 100g (10–12 tai yến)",
          spec: "Hộp gỗ sơn mài lót lụa vàng hoàng yến",
          price: "Liên hệ để nhận giá",
          perk: "Tặng set thố chưng sứ hoàng gia & táo đỏ"
        }
      ],
      highlights: [
        "Tai yến già sợi dày, giữ nguyên cấu trúc tổ vòm",
        "Làm sạch thủ công tỉ mỉ bằng nước tinh khiết",
        "Hộp quà bọc lụa cao cấp, dập chìm quốc huy thương hiệu"
      ]
    },
    {
      id: "set-qua-tang-yen",
      name: "Set Quà Tặng Yến",
      subtitle: "Bộ Quà Biếu Đỏ Burgundy Quai Dây Vàng",
      category: "quatang",
      badge: "Quà Tặng Thượng Lưu",
      image: "images/products/set-qua-tang.jpg",
      shortDesc: "Túi giấy đỏ burgundy phối quai dây vàng champagne sang trọng, tôn vinh thành ý người trao tặng.",
      fullDesc: "Set Quà Tặng Yến BIRD'S NEST được đồng bộ hoàn hảo từ túi xách đỏ burgundy quý phái, quai dây vàng champagne bện tơ, cho đến hộp quà cứng cáp dập kim logo thương hiệu. Lựa chọn hoàn hảo cho đối tác và người trân quý.",
      variants: [
        {
          code: "ankhang",
          label: "Set An Khang",
          weight: "Set 6 hũ yến chưng tươi",
          spec: "Túi xách đỏ burgundy + Hộp quà cứng dập kim",
          price: "Liên hệ để nhận giá",
          perk: "Kèm thiệp viết tay theo yêu cầu"
        },
        {
          code: "thinhvuong",
          label: "Set Thịnh Vượng VIP",
          weight: "Set Tổ yến 50g + 4 hũ chưng tươi",
          spec: "Bộ quà tặng cao cấp phối hợp",
          price: "Liên hệ để nhận giá",
          perk: "Thiết kế riêng cho khách hàng doanh nghiệp"
        }
      ],
      highlights: [
        "Thiết kế túi đỏ burgundy phối quai vàng champagne đẳng cấp",
        "Hộp cứng cáp chịu lực, lót xốp nhung chống va đập",
        "Tặng kèm thiệp chúc mừng thiết kế đồng bộ"
      ]
    },
    {
      id: "hop-qua-suc-khoe",
      name: "Hộp Quà Sức Khỏe",
      subtitle: "Bộ Sản Phẩm Bồi Bổ Thảo Mộc Toàn Diện",
      category: "quatang",
      badge: "Chăm Sóc Toàn Diện",
      image: "images/products/hop-qua-suc-khoe.jpg",
      shortDesc: "Phối hợp tinh tế giữa yến sào và các sản vật dinh dưỡng thảo mộc chăm sóc sức khỏe gia đình.",
      fullDesc: "Hộp Quà Sức Khỏe là bộ quà tặng toàn diện, hòa quyện giữa tổ yến tinh chế, yến chưng tươi và các nguyên liệu thảo mộc truyền thống. Món quà thể hiện tình cảm trọn vẹn, lời cầu chúc sức khỏe dồi dào gửi đến cha mẹ và đối tác.",
      variants: [
        {
          code: "tieuchuan",
          label: "Set Bổ Dưỡng",
          weight: "Yến chưng + Táo đỏ + Hạt sen",
          spec: "Hộp quà gỗ sang trọng",
          price: "Liên hệ để nhận giá",
          perk: "Đóng gói bọc màng co bảo vệ nguyên vẹn"
        },
        {
          code: "vip",
          label: "Set Đại Cát",
          weight: "Tổ yến + Đông trùng + Saffron",
          spec: "Hộp quà thượng lưu phối hợp",
          price: "Liên hệ để nhận giá",
          perk: "Tặng bộ ly tách sứ cao cấp"
        }
      ],
      highlights: [
        "Giải pháp quà biếu sức khỏe toàn diện và trang trọng",
        "Đa dạng trải nghiệm ẩm thực bổ dưỡng",
        "Dịch vụ giao tận tay người nhận với lời chúc chu đáo"
      ]
    }
  ],

  usp: [
    {
      id: "usp-1",
      title: "Tuyển chọn sản phẩm kỹ lưỡng",
      desc: "Từng tai yến và hũ yến chưng đều trải qua các khâu chọn lọc kỹ càng, giữ gìn độ tinh sạch và vẻ đẹp tự nhiên.",
      icon: "selection",
      featured: true
    },
    {
      id: "usp-2",
      title: "Bao bì sang trọng, đẳng cấp hoàng gia",
      desc: "Sắc đỏ burgundy quý phái kết hợp quai xách bện vàng champagne dập kim logo, tạo ấn tượng sâu sắc ngay từ cái nhìn đầu tiên.",
      icon: "packaging",
      featured: true
    },
    {
      id: "usp-3",
      title: "Phù hợp làm quà tặng ý nghĩa",
      desc: "Món quà tinh tế bày tỏ lòng hiếu kính cha mẹ, tri ân đối tác và gửi trao sự quan tâm chân thành đến người thân yêu.",
      icon: "gift",
      featured: false
    },
    {
      id: "usp-4",
      title: "Tư vấn tận tâm 1-1",
      desc: "Đội ngũ am hiểu sản phẩm, hỗ trợ lựa chọn giải pháp quà biếu và định lượng phù hợp với từng đối tượng sử dụng.",
      icon: "consultation",
      featured: false
    },
    {
      id: "usp-5",
      title: "Đóng gói chỉn chu từng chi tiết",
      desc: "Lớp chống sốc chuyên dụng, túi xách cao cấp kèm thiệp chúc mừng trang trọng được chăm chút cẩn trọng trước khi giao.",
      icon: "care",
      featured: false
    },
    {
      id: "usp-6",
      title: "Giao hàng thuận tiện, an toàn",
      desc: "Quy trình vận chuyển nhanh chóng, bảo đảm hình thức hộp quà luôn nguyên vẹn và lịch sự khi tới tay người nhận.",
      icon: "delivery",
      featured: false
    }
  ],

  process: [
    {
      step: "01",
      title: "LỰA CHỌN",
      placeholderText: "[Thông tin quy trình lựa chọn sản phẩm]",
      note: "Sản phẩm được tuyển chọn theo các tiêu chuẩn thẩm mỹ và chất lượng khắt khe của thương hiệu."
    },
    {
      step: "02",
      title: "KIỂM TRA",
      placeholderText: "[Thông tin quy trình kiểm tra chất lượng sản phẩm]",
      note: "Đánh giá độ tinh sạch, hình thái và độ ẩm tiêu chuẩn của từng mẻ yến trước khi đóng hộp."
    },
    {
      step: "03",
      title: "ĐÓNG GÓI",
      placeholderText: "[Thông tin quy trình đóng gói tiêu chuẩn cao cấp]",
      note: "Quy trình đóng hộp quà, chèn xốp lụa bảo vệ và đóng túi xách quà tặng sang trọng, đồng bộ."
    },
    {
      step: "04",
      title: "GIAO ĐẾN KHÁCH HÀNG",
      placeholderText: "[Thông tin quy trình giao nhận và chăm sóc khách hàng]",
      note: "Vận chuyển tận nơi an toàn, kèm phiếu hướng dẫn sử dụng và hỗ trợ kiểm tra hàng chu đáo."
    }
  ],

  usageGuide: [
    {
      id: "usage",
      title: "Cách sử dụng",
      icon: "sparkles",
      placeholder: "[Bổ sung hướng dẫn sử dụng chính thức của sản phẩm]",
      preview: "Nên thưởng thức từng thìa nhỏ để cảm nhận trọn vẹn vị thanh ngọt và độ giòn dai của từng sợi yến."
    },
    {
      id: "cook",
      title: "Cách chế biến",
      icon: "flame",
      placeholder: "[Bổ sung hướng dẫn chế biến chính thức của sản phẩm]",
      preview: "Đối với yến tổ, chưng cách thủy lửa nhỏ trong 20–30 phút và chỉ cho đường phèn vào giai đoạn cuối."
    },
    {
      id: "preserve",
      title: "Cách bảo quản",
      icon: "shield",
      placeholder: "[Bổ sung hướng dẫn bảo quản chính thức của sản phẩm]",
      preview: "Bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Với yến chưng tươi, giữ trong ngăn mát tủ lạnh."
    },
    {
      id: "timing",
      title: "Thời điểm sử dụng",
      icon: "clock",
      placeholder: "[Bổ sung thời điểm sử dụng thích hợp của sản phẩm]",
      preview: "Thời điểm lý tưởng là buổi sáng sớm khi bụng đói hoặc buổi tối trước khi đi ngủ khoảng 30–60 phút."
    }
  ],

  giftGroups: [
    { id: "parent", title: "Tặng Cha Mẹ", tag: "Set Quà Hiếu Kính", desc: "Món quà bày tỏ lòng hiếu kính và sự chăm sóc ân cần đối với đấng sinh thành." },
    { id: "relatives", title: "Tặng Người Thân", tag: "Set Gắn Kết Tình Thân", desc: "Gắn kết tình thân với món quà sức khỏe bổ dưỡng, thanh nhã." },
    { id: "partners", title: "Tặng Đối Tác", tag: "Set Ngoại Giao VIP", desc: "Khẳng định đẳng cấp và uy tín thương hiệu trong các dịp giao tế quan trọng." },
    { id: "employees", title: "Tặng Nhân Viên", tag: "Set Tri Ân Cống Hiến", desc: "Phúc lợi sức khỏe cao cấp ghi nhận những đóng góp và cống hiến quý báu." },
    { id: "tet", title: "Quà Tết Đoàn Viên", tag: "Set An Khang Khởi Sắc", desc: "Lời chúc khởi đầu năm mới an khang thịnh vượng trong sắc đỏ may mắn." },
    { id: "birthday", title: "Quà Sinh Nhật", tag: "Set Tuổi Vàng An Nhiên", desc: "Món quà bất ngờ mang thông điệp chúc khỏe mạnh và an yên dài lâu." },
    { id: "wellness", title: "Quà Mừng Sức Khỏe", tag: "Set Phục Hồi Thể Lực", desc: "Thăm hỏi và chúc phục hồi sức khỏe với sự chăm chút tinh tế nhất." }
  ],

  commitments: [
    { id: "c1", text: "[Cam kết 1: Quy trình đóng gói và bảo quản cẩn thận, an toàn vệ sinh]" },
    { id: "c2", text: "[Cam kết 2: Tư vấn chính xác, trung thực đúng nhu cầu của khách hàng]" },
    { id: "c3", text: "[Cam kết 3: Chính sách đổi trả minh bạch nếu sản phẩm lỗi quy cách]" },
    { id: "c4", text: "[Cam kết 4: Bảo mật thông tin đặt hàng và giao hàng đúng hẹn chu đáo]" }
  ],

  faq: [
    {
      q: "Tổ yến có những loại nào?",
      a: "Tổ yến trên thị trường thường có yến thô (còn lông nguyên bản), yến tinh chế (đã làm sạch lông và định hình tai yến), và yến chưng tươi ăn liền. [Vui lòng cập nhật danh mục chủng loại cụ thể của BIRD'S NEST]."
    },
    {
      q: "Tôi nên chọn sản phẩm nào để làm quà?",
      a: "Nếu biếu tặng cha mẹ hoặc người lớn tuổi cần sự tiện lợi, các Set Yến Chưng Thượng Hạng là lựa chọn phù hợp. Với đối tác quan trọng cần sự trang trọng, Yến Tổ Tinh Chế trong hộp quà nhung đỏ hoặc gỗ cao cấp là phương án tối ưu."
    },
    {
      q: "Có những quy cách đóng gói nào?",
      a: "BIRD'S NEST cung cấp quy cách hũ đơn 70ml, hộp 6 hũ, set quà túi giấy đỏ quai vàng, và hộp yến tổ 50g – 100g. [Cập nhật thêm quy cách đóng gói theo yêu cầu]."
    },
    {
      q: "Có xuất hóa đơn không?",
      a: "[Thông tin chính thức về chính sách xuất hóa đơn GTGT/VAT cho doanh nghiệp của BIRD'S NEST]."
    },
    {
      q: "Có giao hàng không?",
      a: "BIRD'S NEST hỗ trợ giao hàng tận nơi trên toàn quốc với quy cách đóng gói chống sốc chuyên dụng để bảo đảm nguyên vẹn hộp quà."
    },
    {
      q: "Thời gian giao hàng bao lâu?",
      a: "[Thông tin chính thức về thời gian giao hàng nội thành và ngoại tỉnh của BIRD'S NEST]."
    },
    {
      q: "Có nhận đơn quà tặng doanh nghiệp không?",
      a: "BIRD'S NEST sẵn sàng hỗ trợ các đơn quà tặng doanh nghiệp với thiết kế thiệp chúc mừng, in ấn logo và chính sách chiết khấu linh hoạt. [Vui lòng liên hệ hotline để nhận tư vấn chi tiết]."
    },
    {
      q: "Làm thế nào để đặt hàng?",
      a: "Quý khách có thể bấm 'ĐẶT HÀNG NGAY' trên website, gọi điện trực tiếp hotline [SỐ ĐIỆN THOẠI] hoặc nhắn tin qua Zalo [LINK ZALO] để được hỗ trợ tức thì."
    },
    {
      q: "Chính sách đổi trả như thế nào?",
      a: "[Thông tin chính thức về quy định đổi trả và bảo hành sản phẩm của BIRD'S NEST]."
    }
  ]
};
