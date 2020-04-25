import response
import requests
import json
import argparse 
import xlrd

access_token = "nAw14-uihGTDzu5DHkk99qNWEmM2Kph2"
workbook = xlrd.open_workbook("Contacts.xls")
sheet = workbook.sheet_by_index(0)

def content_for_donated(stt):
    value = sheet.row_values(stt)
    name = value [2]
    print (round(value[0]))
    content = "Thân gửi gia đình anh chị " + name + ", Được biết anh chị trong hoàn cảnh khó khăn, hiện tại bọn em có nhà hảo tâm muốn hỗ trợ anh chị một phần bằng thực phẩm, anh chị có đồng ý sự giúp đỡ này không ạ? Trả lời CO neu dong y, KHONG neu anh chi khong dong y"
    return content
## Lấy content theo số thứ tự trong danh sách liên lạc
def get_info():  
    response_info = requests.get("https://api.speedsms.vn/index.php/user/info?access-token=" + access_token)
    print (response_info.status_code)
    print (response_info)
    data_dict = response_info.json()
    print (data_dict)
    print (" Số dư hiện tại: " + str(data_dict["data"]["balance"]) + " VNĐ")

## Lấy số dư từ tài khoản hiện tại
def sending_sms(stt,sms_type,brandname):
    value = sheet.row_values(stt)
    phone_number = str(round(value[0]))

    content = content_for_donated(stt)

    response_sending = requests.get("https://api.speedsms.vn/index.php/sms/send?access-token=" +access_token + "&to="+ phone_number+ "&content="+content+"&type="+sms_type +"&sender=" +brandname)
    print (response_sending.status_code)
    print (response_sending.json())
## Gửi tin nhắn đến người nhận donate

def sending_all_sms():
    for i in range (1, sheet.nrows):
        sending_sms(i, "2", "84931365963")
get_info()
# sending_sms(3, "2", "84931365963")
print(content_for_donated(3))


        












