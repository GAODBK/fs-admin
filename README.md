# bookstore

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

字符编码：确保数据库和表的字符编码设置为支持中文的 utf8mb4。
```sql
ALTER DATABASE BookStore CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE books CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```


```sql
-- 创建数据库
CREATE DATABASE IF NOT EXISTS BookStore;
USE BookStore;

-- 创建表
CREATE TABLE IF NOT EXISTS books (
    book_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    bookTitle VARCHAR(50) NOT NULL,
    author VARCHAR(50),
    publish VARCHAR(50),
    ISBN VARCHAR(20),
    introduction TEXT,
    language VARCHAR(10),
    price DECIMAL(8, 2),
    pub_date DATE,
    class_id VARCHAR(50),
    number INT
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 暂时禁用自增约束
SET SESSION sql_mode='NO_AUTO_VALUE_ON_ZERO';

-- 插入数据
INSERT INTO books (
    book_id, name, author, publish, ISBN, introduction, language, price, pub_date, class_id, number
) VALUES (
    11,
    '茶花女',
    '(法)亚历山大•小仲马(著)',
    '外语教学与研究出版社',
    'B092YFZV2G',
    '讲述在19世纪40年代，一个叫阿尔丰西娜•普莱西的贫苦乡下姑娘来到巴黎，走进了名利场，成了上流社会的一个社交明星，开始了卖笑生涯；之后她改名为玛丽•杜普莱西，结识了小仲马，于是两人开始了一段交往的爱情故事。',
    '繁體中文',
    783.0,
    '2013-02-01',
    '/foreignNovels',
    30
);
```
-- 恢复自增约束
SET SESSION sql_mode='';

-- 假设 page_size 是每页显示的记录数，page_number 是页码（从 1 开始）
SET @page_size = 4;
SET @page_number = 2; -- 第二页

SELECT *
FROM books
ORDER BY book_id
LIMIT @page_size OFFSET (@page_number - 1) * @page_size;

