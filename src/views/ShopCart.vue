<script setup>
import router from '@/router'
import { inject, ref } from 'vue'

const selectedProducts = inject('selectedProducts')

const lumpSum = products => {
  return parseFloat(
    products
      .reduce(
        (sum, item) =>
          sum +
          (item.inventoryQuantity === 0
            ? 0
            : item.shoppingQuantity * item.price),
        0,
      )
      .toFixed(1),
  )
}

const settlementPrice = (sumPrice, tax) => {
  return parseFloat(
    (sumPrice <= 40 ? sumPrice + 5 : sumPrice + 5 + tax).toFixed(1),
  )
}
const tax = sumPrice => {
  return sumPrice < 40 ? 0 : parseFloat((sumPrice / 20).toFixed(1))
}

const limitQuantity = products => {
  if (products.shoppingQuantity > 30) products.shoppingQuantity = 30
}

const gotoHome = () => router.back()

const imgurl =
  'https://raw.githubusercontent.com/GAODBK/fs-admin/refs/heads/vuetest/src/assets'
</script>

<template>
  <div class="wrap cf">
    <div class="heading cf">
      <h1>我的购物车</h1>
      <a href="#" class="continue" @click="gotoHome()">继续购物 </a>
    </div>
    <div class="cart">
      <!-- <ul class="tableHead">
        <li class="prodHeader">Product</li>
        <li>Quantity</li>
        <li>Total</li>
        <li>Remove</li>
      </ul> -->
      <li style="padding: 2rem 0" v-if="!selectedProducts.length">
        您还没有添加任何商品
      </li>
      <li
        class="items"
        v-for="(item, index) in selectedProducts"
        :class="{ odd: index % 2 === 1, even: index % 2 === 0 }"
        :key="index"
      >
        <div class="infoWrap" :class="{ shrinkAnimation: !item }">
          <div class="cartSection">
            <img
              :src="`${imgurl}/${item.book_id}.jpg`"
              alt=""
              class="itemImg"
            />

            <p class="itemNumber">{{ item.ISBN }}</p>

            <h3>{{ item.name }}</h3>

            <p>
              <input
                type="text"
                class="qty"
                v-if="item.inventoryQuantity === 0"
                :placeholder="
                  item.inventoryQuantity === 0 ? 0 : item.shoppingQuantity
                "
              />
              <input
                type="text"
                class="qty"
                v-else
                v-model.number="item.shoppingQuantity"
                :disabled="item.inventoryQuantity === 0"
                @input="limitQuantity(item)"
              />
              x ${{ item.price }}
            </p>

            <p
              class="stockStatus"
              v-if="item.inventoryQuantity"
              :class="{ out: item.inventoryQuantity }"
            >
              有货
            </p>
            <p class="stockStatus" v-else>缺货</p>
          </div>

          <div class="prodTotal cartSection">
            <p>
              ${{
                (
                  item.price *
                  (item.inventoryQuantity === 0 ? 0 : item.shoppingQuantity)
                ).toFixed(1)
              }}
            </p>
          </div>

          <div class="cartSection removeWrap">
            <a
              href="#"
              class="remove"
              @click="selectedProducts.splice(index, 1)"
              >x</a
            >
          </div>
        </div>
      </li>
    </div>

    <div class="promoCode">
      <label for="promo">有促销代码吗？ </label>
      <input type="text" name="promo" placeholder="输入代码(默认95折)" />
      <a href="#" class="btn"></a>
    </div>

    <div class="subtotal cf" v-if="selectedProducts.length">
      <ul>
        <li class="totalRow">
          <span class="label">小计 </span>
          <span class="value"> ${{ lumpSum(selectedProducts) }} </span>
        </li>

        <li class="totalRow">
          <span class="label">运费 </span><span class="value">$5.00</span>
        </li>

        <li class="totalRow">
          <span class="label">税(超过40收税5%) </span>
          <span class="value"> ${{ tax(lumpSum(selectedProducts)) }} </span>
        </li>

        <li class="totalRow final">
          <span class="label">总计</span>
          <span class="value">
            ${{
              settlementPrice(
                lumpSum(selectedProducts),
                tax(lumpSum(selectedProducts)),
              )
            }}
          </span>
        </li>
        <li class="totalRow"><a href="#" class="btn continue">去结算 </a></li>
      </ul>
    </div>
  </div>
</template>

<style>
img {
  max-width: 100%;
}

ul li {
  list-style-type: none;
}

.cf:before,
.cf:after {
  content: ' ';
  display: table;
}

.cf:after {
  clear: both;
}

.wrap {
  max-width: 960px;
  margin: 0 auto;
}

.projTitle {
  font-weight: bold;
  text-align: center;
  font-size: 2em;
  padding: 1em 0;
  border-bottom: 1px solid #dadada;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.projTitle span {
  font-weight: normal;
  font-style: italic;
  text-transform: lowercase;
  color: #777;
}

.heading {
  padding: 1em 0;
  border-bottom: 1px solid #d0d0d0;
}

.heading h1 {
  font-size: 2em;
  float: left;
}

.heading a.continue:link,
.heading a.continue:visited {
  text-decoration: none;
  letter-spacing: -0.015em;
  font-size: 0.75em;
  padding: 1em;
  color: #fff;
  background: #409eff;
  font-weight: bold;
  border-radius: 50px;
  float: right;
  text-align: right;
}

.heading a.continue:after {
  content: '❯';
  padding: 0.5em;
  position: relative;
  right: 0;
}

.heading a.continue:hover,
.heading a.continue:focus,
.heading a.continue:active {
  background: #82ca9c;
}

.heading a.continue:hover:after,
.heading a.continue:focus:after,
.heading a.continue:active:after {
  right: -10px;
}

.tableHead {
  display: table;
  width: 100%;
  font-size: 0.75em;
}

.tableHead li {
  display: table-cell;
  padding: 1em 0;
  text-align: center;
}

.tableHead li.prodHeader {
  text-align: left;
}

.cart {
  padding: 1em 0;
}

.cart .items {
  width: 100%;
  display: inline-block;
  vertical-align: middle;
  border-bottom: 1px solid #fafafa;
}

.cart .items.even {
  background: #fafafa;
}

.cart .items .infoWrap {
  display: table;
  width: 100%;
  margin-bottom: 1.5rem;
  transform-origin: 0 0;
  transition: all 0.7s ease;
}

.shrinkAnimation {
  transform: scale(0.3);
}

.cart .items .cartSection {
  display: table-cell;
  vertical-align: middle;
}

.cart .items .cartSection .itemNumber {
  font-size: 0.75em;
  color: #777;
  margin-bottom: 0.5em;
}

.cart .items .cartSection h3 {
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.cart .items .cartSection p {
  display: inline-block;
  font-size: 0.85em;
  color: #777777;
}

.cart .items .cartSection p .quantity {
  font-weight: bold;
  color: #333;
}

.cart .items .cartSection p.stockStatus {
  color: #409eff;
  font-weight: bold;
  padding: 0.5em 0 0 1em;
  text-transform: uppercase;
}

.cart .items .cartSection p.stockStatus.out {
  color: #82ca9c;
}

.cart .items .cartSection .itemImg {
  width: 4em;
  float: left;
}

.cart .items .cartSection.qtyWrap,
.cart .items .cartSection.prodTotal {
  text-align: center;
}

.cart .items .cartSection.qtyWrap p,
.cart .items .cartSection.prodTotal p {
  font-weight: bold;
  font-size: 1.25em;
}

.cart .items .cartSection input.qty {
  width: 2em;
  text-align: center;
  font-size: 1em;
  padding: 0.25em;
  margin: 1em 0.5em 0 0;
}

.cart .items .cartSection .itemImg {
  width: 8em;
  display: inline;
  padding-right: 1em;
}

.special {
  display: block;
}

.special .specialContent {
  padding: 1em 1em 0;
  display: block;
  margin-top: 0.5em;
  border-top: 1px solid #dadada;
}

.special .specialContent:before {
  content: '↳';
  font-size: 1.5em;
  margin-right: 1em;
  color: #6f6f6f;
  font-family: helvetica, arial, sans-serif;
}

a.remove {
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  background: #e0e0e0;
  padding: 0.5em;
  font-size: 0.75em;
  display: inline-block;
  border-radius: 100%;
  line-height: 0.85;
}

a.remove:hover {
  background: #f30;
}

.promoCode {
  border: 2px solid #efefef;
  float: left;
  width: 35%;
  padding: 2%;
}

.promoCode label {
  display: block;
  width: 100%;
  font-size: 1.15em;
  margin-bottom: 0.5em;
  letter-spacing: -0.025em;
}

.promoCode input {
  width: 75%;
  font-size: 1em;
  padding: 0.5em;
  float: left;
  border: 1px solid #dadada;
}

.promoCode input:active,
.promoCode input:focus {
  outline: 0;
}

.promoCode a.btn {
  float: left;
  width: 15%;
  padding: 0.6em 0;
  border-radius: 0 1em 1em 0;
  text-align: center;
  border: 1px solid #409eff;
}

.promoCode a.btn:hover {
  border: 1px solid #82ca9c;
  background: #82ca9c;
}

.btn:link,
.btn:visited {
  text-decoration: none;
  letter-spacing: -0.015em;
  font-size: 1em;
  padding: 1em 3em;
  color: #fff;
  background: #409eff;
  font-weight: bold;
  border-radius: 50px;
  float: right;
  text-align: right;
}

.btn:after {
  content: '❯';
  padding: 0.5em;
  position: relative;
  right: 0;
}

.btn:hover,
.btn:focus,
.btn:active {
  background: #82ca9c;
}

.btn:hover:after,
.btn:focus:after,
.btn:active:after {
  right: -10px;
}

.promoCode .btn {
  font-size: 0.85em;
  padding: 0.5em 2em;
}

/* TOTAL AND CHECKOUT  */
.subtotal {
  float: right;
  width: 35%;
}

.subtotal .totalRow {
  padding: 0.5em;
  text-align: right;
}

.subtotal .totalRow.final {
  font-size: 1.25em;
  font-weight: bold;
}

.subtotal .totalRow span {
  display: inline-block;
  padding: 0 0 0 1em;
  text-align: right;
}

.subtotal .totalRow .label {
  font-size: 0.85em;
  text-transform: uppercase;
  color: #777;
}

.subtotal .totalRow .value {
  letter-spacing: -0.025em;
  width: 35%;
}

@media only screen and (max-width: 39.375em) {
  .wrap {
    width: 98%;
    padding: 2% 0;
  }

  .projTitle {
    font-size: 1.5em;
    padding: 10% 5%;
  }

  .heading {
    padding: 1em;
    font-size: 90%;
  }

  .cart .items .cartSection {
    width: 90%;
    display: block;
    float: left;
  }

  .cart .items .cartSection.qtyWrap {
    width: 10%;
    text-align: center;
    padding: 0.5em 0;
    float: right;
  }

  .cart .items .cartSection.qtyWrap:before {
    content: 'QTY';
    display: block;
    padding: 0.25em;
    font-size: 0.75em;
  }

  .cart .items .cartSection.prodTotal,
  .cart .items .cartSection.removeWrap {
    display: none;
  }

  .cart .items .cartSection .itemImg {
    width: 25%;
  }

  .promoCode,
  .subtotal {
    width: 100%;
  }

  a.btn.continue {
    width: 100%;
    text-align: center;
  }
}
</style>
