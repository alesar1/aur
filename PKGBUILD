# Maintainer: fitu996 <fitu996 _at_ gmail _dot_ com>
# Maintainer: flan_suse <windows2linux_AT_zoho_DOT_com>
# Contributor: Eric Bélanger <eric@archlinux.org>

pkgname=dvdisaster
pkgver=0.79.9
pkgrel=2
provides=('dvdisaster')
pkgdesc="Provides a margin of safety against data loss on newly created ISO, CD, DVD, and BDR media caused by aging or scratches"
arch=('x86_64')
url="https://dvdisaster.jcea.es"
license=('GPL')
depends=('gtk2')
options=('!makeflags')
source=(${pkgname}-${pkgver}.tar.bz2::${url}/downloads/${pkgname}-${pkgver}.tar.bz2
        ${pkgname}-${pkgver}.tar.bz2.gpg::${url}/downloads/${pkgname}-${pkgver}.tar.bz2.gpg)
sha1sums=('8ba9d605488a87c2c48c60712f431d22a6972dc6'
         'a701d2cf3844579e41f3502736e70e95bc5a758b')
validpgpkeys=('12B31535AF903ADE9E73BA7E5A590EFEF5F6C46C')

prepare() {
  cd ${pkgname}-${pkgver}
  # Modify provided .desktop shortcut to point to dvdisaster.png rather than dvdisaster48.png
  sed -i 's/dvdisaster48/dvdisaster/' contrib/dvdisaster.desktop
}

build() {
  export CFLAGS="$CFLAGS -fcommon"
  cd ${pkgname}-${pkgver}
  ./configure --prefix=/usr \
    --mandir=/usr/share/man \
    --docdir=/usr/share/doc \
    --localedir=/usr/share/locale \
    --with-nls=yes \
  make
}

package() {
  cd ${pkgname}-${pkgver}
  make BUILDROOT="${pkgdir}" install
  # Remove unnecessary uninstaller script 
  rm -f "${pkgdir}/usr/bin/dvdisaster-uninstall.sh"
  install -D -m 644 contrib/dvdisaster.desktop "${pkgdir}/usr/share/applications/dvdisaster.desktop"
  # Rename all .png icons to strip their resolution from their names, and place them in the proper standard directories
  for i in 16 24 32 48 64 ; do
    install -D -m 644 contrib/dvdisaster${i}.png "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps/dvdisaster.png"
  done
}
