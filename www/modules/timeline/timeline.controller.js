angular.module('river.controllers')
    .controller('TimelineCtrl', function ($scope) {

        $scope.timeline = [
            {
                date: new Date(),
                title: "I am here",
                author: "ฉัตรชัย",
                profilePicture: "perry.png",
                text: "กุมภาพันธ์ สลัมโปรโมชั่นเด้อ อพาร์ตเมนท์เกย์พ่อค้าแบดตุ๊ก หยวนเทควันโดไบโอหน่อมแน้มโหงว ดยุคดอกเตอร์โหงวเฮ้งเลดี้ ช็อปชัวร์สะบึมส์ไบเบิล นู้ดอพาร์ทเมนต์อวอร์ดมายาคติฮ็อต สแตนดาร์ดรากหญ้าอาข่าเซาท์ติว แบรนด์รีเสิร์ชมั้ย ซูเอี๋ย ภคันทลาพาธโดนัท พาร์ตเนอร์วัจนะสะกอม ควีนซิมโบว์ลิ่งรีสอร์ท กีวีพริตตี้เลิฟมัฟฟิน มาร์ต ทีวี",
                type: "location"

            }, {
                date: new Date(),
                title: "For my friends",
                author: "ปวีณา",
                profilePicture: "mike.png",
                text: "เทรด เห่ยล็อตวัคค์ ฟีเวอร์ ซูโม่ฉลุยอิสรชน หน่อมแน้มซัพพลายเซาท์ คอปเตอร์ยังไงฮาโลวีนซีรีส์ คอรัปชั่นบ๋อยวานิลลาโปสเตอร์ ควิกจึ๊ก ผลักดันเกรดน้องใหม่สโลว์ เวสต์ เห็นด้วย แคทวอล์คช็อปปิ้งแชมเปี้ยน ซิม เชฟอีแต๋นดีพาร์ทเมนท์ บลูเบอร์รี ตัวเองดาวน์แทคติคแฟรนไชส์",
                type: "text"

            }, {
                date: new Date(),
                title: "Look at my video!",
                author: "Miranda Smith",
                profilePicture: "max.png",
                text: "Lorem ipsum dolor sit amet",
                type: "video"

            }, {
                date: new Date(),
                title: "Awesome picture",
                author: "John Mybeweeg",
                profilePicture: "adam.jpg",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
                type: "picture"
            }]

    });