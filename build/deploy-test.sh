# 如果目录不存在，则创建目录，否则拷贝构建好的文件到该目录
if [ ! -d /www/test/gitlab-ci-example  ];then
  mkdir /www/test/gitlab-ci-example
else
  echo dir exist
  cp -rf dist/* /www/test/gitlab-ci-example
fi
