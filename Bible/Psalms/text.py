import re

# 打开原始文件
with open('Psalms.txt', 'r', encoding='utf-8') as file:
    content = file.read()

# 想要換行的標點符號（保留它們）
punctuations = '、：；，。！？－'

# 在這些符號後面加入換行符（保留標點）
content = re.sub(f'([{punctuations}])', r'\1\n', content)

# 刪除多餘換行
content = re.sub(r'\n+', '\n', content)

# 写入新文件
with open('clean_Psalms.txt', 'w', encoding='utf-8') as file:
    file.write(content)

print("Done！")
