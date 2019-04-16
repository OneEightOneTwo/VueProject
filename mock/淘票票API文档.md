
###### 首页
> 地址：http://10.20.158.65:5000/citys/
``` javascript
{
    "returnCode": "0",
    "returnValue": {
        "A": [
            {
                "id": 333,
                "parentId": 4454,
                "regionName": "深圳",
                "cityCode": 435453,
                "pinYin": "SHENZHEN"
            },
            ...
        ],
        "B": [...],
        "C": [...],
        ...
    }
}
```

**2\. 注册**

###### 接口功能
> 注册用户

###### URL
> [/register/](/register/)

###### 支持格式
> JSON

###### HTTP请求方式
> POST

###### 请求参数
> | 名称     | 字段类型 | 说明                    |
> | -------- | -------- | ----------------------- |
> | username | string   | 用户名称（6~18位）,唯一 |
> | password | string   | 密码                    |
> | email    | string   | 合法的邮箱， 唯一       |

###### 返回字段
> |返回字段|字段类型|说明                              |
> |:-----   |:------|:-----------------------------   |
> |id   |int    |用户id   |
> |username  |string | 用户名称          |
> |email |string |邮箱                         |
> |is_active |bool |是否激活 |

###### 接口示例
> 地址：http://10.20.158.65:5000/register/
``` javascript
{
    "returnCode": "0",
    "msg": "success",
    "returnValue": {
        "id": 1,
        "username": "lisi",
        "email": "abc@163.com",
        "is_active": false
    }
}
```
