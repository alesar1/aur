# Maintainer: Robert Manning <duckz@protonmail.ch>

 mv ${startdir}/lncrawl ${startdir}/lncrawl-old

pkgname=lightnovel-crawler-bin
pkgver=v2.25.1
# pkgver=v2.24.5
pkgrel=3
pkgdesc="An app to download novels from online sources and generate e-books."
arch=('any')
url="https://github.com/dipu-bd/lightnovel-crawler.git"
license=('Apache')
depends=(zlib)
optdepends=('calibre: Output suport for docx, mobi, pdf, rtf, azw3, txt, fb2, lit, lrf, oeb, pdb, rb, snb, tcr')
provides=(lncrawl)
conflicts=(lncrawl)

source=("https://github.com/dipu-bd/lightnovel-crawler/releases/download/$pkgver/lncrawl")

md5sums=('bbc464d4461315f0c57c1630f8b93767')
sha1sums=('6ae2c514033976434dad47ac44af89c77b8a6293')
sha256sums=('deea716726839311ff6af8b3e294ed8ba090a19f7dbf676dc8555ccf6d27d7a5')




prepare() {
   mv ${startdir}/lncrawl ${startdir}/lncrawl-$pkgver
}

package() {
  install -Dm755 ${startdir}/lncrawl-$pkgver ${pkgdir}/usr/bin/lncrawl
}
