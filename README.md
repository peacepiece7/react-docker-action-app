# S3

S3 버킷 생성 -> 퍼블릭 액서스 접근 허용 -> 버킷 정책 편집

https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::<버킷 이름>/*"
            ]
        }
    ]
}
```
