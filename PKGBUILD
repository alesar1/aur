# Maintainer: yuhr <sdn.pate(at)gmail.com>

pkgname=zpdic
pkgver=1.18.0
pkgrel=1
pkgdesc="A modern solution for editing dictionaries."
url="http://ziphil.web.fc2.com/application/download/2.html"
license=('custom')
arch=('any')
conflicts=('zpdic')
provides=('zpdic')
depends=('java-environment>=8' 'java-openjfx>=8' 'sh')
source=("v${pkgver}-full.zip::https://www.dropbox.com/sh/g75rqn97sdlpp0b/AAAHY5hnjSeqSnuhIywmDqR3a/v1.18.0-full.zip?dl=1"
        'zpdic'
        'LICENSE')
noextract=("v${pkgver}-full.zip")
md5sums=('0ba7110da857a88c0ab5e0efa6a9ce85'
         SKIP
         SKIP)

package() {
  install -Dm755 {,"${pkgdir}/usr/bin/"}zpdic
  install -Dm644 {,"${pkgdir}/usr/share/licenses/${pkgname}/"}LICENSE

  unzip "v${pkgver}-full.zip" -d "v${pkgver}-full"
  cd "v${pkgver}-full"
  install -dm777 "${pkgdir}/opt/${pkgname}"
  for path in `find` ; do
    if [ -d "${path}" ] ; then
      install -dm777 "${pkgdir}/opt/${pkgname}/${path}"
    elif [ -f "${path}" ] ; then
      install -m644 {,"${pkgdir}/opt/${pkgname}/"}"${path}"
    fi
  done
}
