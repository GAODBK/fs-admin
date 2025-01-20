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

这段代码展示了一个知识库应用的数据库表设计，基于 Prisma 模型定义语言（Prisma Schema）。以下是对每个模型的详细解释：

---

### 1. **Library（知识库）**
- **功能**：这是知识库的主要表，表示一个知识库实体。
- **字段解释**：
  - `id`：主键，使用 `cuid()` 生成唯一 ID。
  - `name` 和 `description`：知识库的名称和描述。
  - `text`：知识库的首页内容，存储为富文本格式（`LongText` 类型）。
  - `showDir`：布尔值，用于标记是否在首页显示目录模块。
  - `childrenLibrary`：该知识库的子知识库（多对一关系，级联删除父级时删除子级）。
  - `parentLibrary` 和 `parentLibraryId`：表示父知识库的外键和关联关系，允许知识库之间建立层次关系。
  - `createdAt` 和 `updatedAt`：分别为创建时间和最后更新时间。
  - **关联关系**：
    - 一个知识库可以包含多个笔记（`Note`）、分组（`Group`）和表格文件（`Excel`）。

---

### 2. **Group（知识库分组）**
- **功能**：知识库中的分组，用于对笔记或表格进一步分类。
- **字段解释**：
  - `id`：主键，唯一标识分组。
  - `name`：分组名称。
  - `childrenGroup`：子分组（分组也可以有层级结构）。
  - `parentGroup` 和 `parentGroupId`：父分组及其外键。
  - `libraryId` 和 `library`：外键，关联到所属知识库。
  - `createdAt` 和 `updatedAt`：时间戳字段。
  - **关联关系**：
    - 一个分组可以包含多个笔记（`Note`）和表格文件（`Excel`）。

---

### 3. **Note（知识库笔记）**
- **功能**：知识库中的笔记，支持富文本格式的内容。
- **字段解释**：
  - `id`：主键，唯一标识笔记。
  - `name`：笔记名称。
  - `text`：笔记内容，存储为 `LongText`（支持富文本）。
  - `libraryId` 和 `library`：外键，关联到所属的知识库。
  - `groupId` 和 `group`：可选外键，关联到所属分组。
  - `childrenNote`：子笔记（支持笔记层级结构）。
  - `parentNote` 和 `parentNoteId`：父笔记及其外键。
  - `createdAt` 和 `updatedAt`：时间戳字段。
  - **关联关系**：
    - 一个笔记可以有多个历史记录（`NoteHistory`）。

---

### 4. **NoteHistory（知识库笔记历史记录）**
- **功能**：记录笔记的历史版本。
- **字段解释**：
  - `id`：主键，唯一标识历史记录。
  - `text`：历史版本的内容（富文本格式）。
  - `noteId` 和 `note`：外键，关联到原笔记。
  - `createdAt` 和 `updatedAt`：时间戳字段。
- **关联关系**：一个笔记可以有多个历史版本记录。

---

### 5. **Excel（表格）**
- **功能**：知识库中的表格文件信息。
- **字段解释**：
  - `id`：主键，唯一标识表格。
  - `name`：表格名称。
  - `url`：表格的本地路径。
  - `libraryId` 和 `library`：外键，关联到所属知识库。
  - `groupId` 和 `group`：可选外键，关联到所属分组。
  - `createdAt` 和 `updatedAt`：时间戳字段。
- **关联关系**：可以从知识库或分组中访问表格。

---

### 设计特点：
1. **层次化关系**：
   - **Library**、**Group** 和 **Note** 均支持嵌套结构（父子层次），通过 `children` 和 `parent` 字段实现。
   - 这种设计可以组织复杂的知识体系，例如多级分类或多级笔记结构。

2. **级联删除**：
   - 在多对一关联中（如父子关系、知识库与笔记的关系），使用 `onDelete: Cascade` 实现级联删除，确保关联数据的一致性。

3. **富文本支持**：
   - 对笔记内容和历史版本采用 `LongText` 类型，支持存储大规模富文本内容。

4. **多样化关联**：
   - 一个知识库可以包含多个分组、笔记和表格；分组可以进一步包含笔记和表格。

5. **时间戳自动管理**：
   - 使用 `@default(now())` 和 `@updatedAt` 自动管理创建时间和更新时间。

---


```shell
[master b876b7c] save all
 40 files changed, 2854 insertions(+), 51 deletions(-)
 create mode 100644 32/App.vue
 create mode 100644 32/index.js
 create mode 100644 32/main.js
 create mode 100644 book-src/App.vue
 create mode 100644 book-src/CompressImages.html
 rename {src => book-src}/css/Boutique.css (100%)
 rename {src => book-src}/css/HomePage.css (100%)
 rename {src => book-src}/css/PopularRankings.css (100%)
 rename {src => book-src}/css/pop.css (100%)
 rename {src => book-src}/css/top.css (100%)
 create mode 100644 book-src/css/topbar.css
 create mode 100644 book-src/main.js
 rename {src => book-src}/router/index.js (100%)
 rename {src => book-src}/stores/BookData.js (100%)
 rename {src => book-src}/stores/counter.js (100%)
 rename {src => book-src}/views/BoutiqueRecommendation.vue (100%)
 rename {src => book-src}/views/Details.vue (100%)
 rename {src => book-src}/views/HomePage.vue (100%)
 rename {src => book-src}/views/ImgBox.vue (100%)
 rename {src => book-src}/views/Introductory.vue (100%)
 rename {src => book-src}/views/ShopCart.vue (100%)
 rename {src => book-src}/views/book.vue (100%)
 rename {src => book-src}/views/pop.vue (100%)
 rename {src => book-src}/views/waterfall.vue (100%)
 create mode 100644 public/svg/back.svg
 create mode 100644 src/cehp.html
 create mode 100644 src/router.js
 create mode 100644 src/views/CreateKnowledge.vue
 create mode 100644 src/views/Directory.vue
 create mode 100644 src/views/DirectoryList.vue
 create mode 100644 src/views/DocumentContent.vue
 create mode 100644 src/views/HomeDocuments.vue
 create mode 100644 src/views/KnowledgeList.vue
 create mode 100644 src/views/MainLayout.vue
 create mode 100644 src/views/SearchContent.vue
```
