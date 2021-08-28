# Maintainer: Direct-A <songyicheng0@gmail.com>

pkgname="rime-pure-git-direct"
pkgver="1.1"
pkgrel=1
pkgdesc="一站式配置【四叶草拼音\小鹤双拼】，更新搜狗词库"
arch=("x86_64")
url="https://github.com/Direct-A/rime-pure"
license=("MIT")
makedepends=("git")
optdepends=("rime-prelude" "rime-emoji" "rime-symbols")
conflicts=("rime-cloverpinyin")
source=("git+${url}"
        "$pkgname.install")
sha256sums=('SKIP'
            '514677f8bf84b762ec246763fd1f22264a2be35465556b31395a656c3a1eb694')

install=${pkgname}.install

package() {
  cd ${srcdir}/${pkgname%-git*}/
  install -Dm644 build/flypy.{prism,reverse,table}.bin -t "$pkgdir"/usr/share/rime-data/build
  install -Dm644 luna_pinyin.userdb/* -t "$pkgdir"/usr/share/rime-data/luna_pinyin.userdb
  # install -Dm644 opencc/* -t "$pkgdir"/usr/share/rime-data/opencc
  install -Dm644 punctuator.yaml -t "$pkgdir"/usr/share/rime-data
  # install -Dm644 {key_bindings,symbols,default}.yaml -t "$pkgdir"/usr/share/rime-data
  install -Dm644 clover.{base.dict,dict,key_bindings,phrase.dict,schema}.yaml -t "$pkgdir"/usr/share/rime-data
  install -Dm644 luna_{pinyin_fluency,pinyin,pinyin_simp}.schema.yaml -t "$pkgdir"/usr/share/rime-data
  install -Dm644 double.{custom,schema}.yaml -t "$pkgdir"/usr/share/rime-data
  install -Dm644 flypy.{custom,schema}.yaml -t "$pkgdir"/usr/share/rime-data
  install -Dm644 flypy_{sys,top,user}.txt -t "$pkgdir"/usr/share/rime-data
  install -Dm644 THUOCL_{animal,caijing,car,chengyu,diming,food,IT,law,lishimingren,medical,poem}.dict.yaml -t "$pkgdir"/usr/share/rime-data
  install -Dm644 {sogou_new_words.dict,customize.recipe,numbers.schema}.yaml -t "$pkgdir"/usr/share/rime-data
  install -Dm644 rime.lua -t "$pkgdir"/usr/share/rime-data
  install -Dm644 {user,essay}.txt -t "$pkgdir"/usr/share/rime-data
}
