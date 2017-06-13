# Maintainer: Doug Newgard <scimmia at archlinux dot info>
# Contributor: Jiachen Yang <farseerfc@gmail.com>
# Contributor: Miguel Revilla <yo@miguelrevilla.com>
# Contributor: Ferik <djferik at gmail dot com>

pkgname=masterpdfeditor-qt4
pkgver=4.2.02
pkgrel=1
pkgdesc='A complete solution for creation and editing PDF files - Qt4 version'
url='https://code-industry.net/free-pdf-editor/'
arch=('i686' 'x86_64')
license=('custom')
conflicts=('masterpdfeditor')
source=('masterpdfeditor.desktop')
source_i686=("http://get.code-industry.net/public/master-pdf-editor-${pkgver}_i386.tar.gz")
source_x86_64=("http://get.code-industry.net/public/master-pdf-editor-${pkgver}_qt4.amd64.tar.gz")
sha1sums=('5b3a0392390e49d4f7f4e478dd336476436f5cfa')
sha1sums_i686=('d09cdbc6644df77592915dd15fec0426a5ac472b')
sha1sums_x86_64=('079585517f2d23d55f0543b1d07dc9fdc3ea5ac5')

package() {
  depends=('gcc-libs' 'glibc' 'qt4' 'sane')

  install -d "$pkgdir"{/opt/,/usr/bin/,/usr/share/applications/}
  cp -a --no-preserve=ownership master-pdf-editor-${pkgver%%.*} "$pkgdir/opt/"
  sed "s/VERMAJ/${pkgver%%.*}/g" masterpdfeditor.desktop > "$pkgdir/usr/share/applications/masterpdfeditor${pkgver%%.*}.desktop"
  ln -s /opt/master-pdf-editor-${pkgver%%.*}/masterpdfeditor${pkgver%%.*} -t "$pkgdir/usr/bin/"
  install -Dm644 master-pdf-editor-${pkgver%%.*}/license.txt -t "$pkgdir/usr/share/licenses/$pkgname/"
}
