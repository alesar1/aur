# Maintainer: Gyara <laxect39@gmail.com>

pkgname=suisho5_nn
pkgver=6
pkgrel=1
pkgdesc="水匠5のソースコードに埋め込まれた評価関数テーブルをファイルに書き出します。"
arch=('any')
url="https://github.com/HiraokaTakuya/get_suisho5_nn"
license=('GPL3')
source=("nn.bin::https://github.com/HiraokaTakuya/get_suisho5_nn/raw/f182be18a81e0277afa8a0c234e88b28fc584a1a/suisho5_nn/nn.bin")
sha512sums=('bbfa42b8a3ddfa23c80299e2bca09c0429995a99434a9a85928aa1928494da632f8c8096e34c0204d6206ccfae26f02ddc6ed5339d7b670fe8503196997d9be9')

package() {
    install -Dm644 "${srcdir}/nn.bin" "$pkgdir/usr/share/yaneuraou/suisho5/nn.bin"
}
