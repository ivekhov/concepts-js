import _ from 'lodash';

const getForwardedVariables = (content) => {
  const PATTERN = "environment=";
  const PREFIX = "X_FORWARDED_";
  let lines = content.split('\n').filter((row) => row.includes(PATTERN)).map((item) => item.split(','));
  const tokens = _.flattenDeep(lines).filter((item) => item.includes(PREFIX));
  
  const result = tokens.reduce((acc, text) => {
    const chunks = text.split('_').at(-1).replaceAll('"','');
    acc.push(chunks);
    return acc;
  }, [])
  return result.join(',');
};








const content = "" +
  "[foo:bar]\n" +
  "environment=\"X_FORWARDED_var1=111\"\n" +
  "\n" +
  "[bar:baz]\n" +
  "environment=\"key2=true,X_FORWARDED_var2=123\"\n" +
  "command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'\n" +
  "\n" +
  "[baz:foo]\n" +
  "key3=\"value3\"\n" +
  "command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make prepare'\n" +
  "\n" +
  "[program:prepare]\n" +
  "environment=\"key5=value5,X_FORWARDED_var3=value,key6=value6\"\n" +
  "\n" +
  "[program:start]\n" +
  "environment=\"pwd=/temp,user=tirion\"\n" +
  "\n" +
  "[program:options]\n" +
  "environment=\"X_FORWARDED_mail=tirion@google.com,X_FORWARDED_HOME=/home/tirion,language=en\"\n" +
  "command=sudo -HEu tirion /bin/bash -c 'cd /usr/src/app && make environment'\n" +
  "\n" +
  "[empty]\n" +
  "command=\"X_FORWARDED_HOME=/ cd ~\"\n"


console.log(
  getForwardedVariables(content),
)
// => variable=value

// 'var1=111,var2=123,var3=value,mail=tirion@google.com,HOME=/home/tirion'
