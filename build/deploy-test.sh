# 如果目录不存在，则提示目录不存在并引导创建，否则拷贝构建好的文件到该目录
TEST_PATH="/www/test/gitlab-ci-example";
if [ ! -d $TEST_PATH  ];then
  echo "$TEST_PATH: No such file or directory"
  echo "Please create this directory and then assign the directory permissions to the gitlab-runner user.\nYou can execute the following command as root:"
  echo "mkdir $TEST_PATH\nchown gitlab-runner $TEST_PATH"
else
  cp -rf dist/* $TEST_PATH
fi
