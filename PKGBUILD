# Maintainer: oscareczek <oscareczek at gmail dot com>
pkgname=86box-roms-git
pkgver=r371.b90ccd3
pkgrel=1
pkgdesc='ROMs for the 86Box emulator.'
arch=('any')
url='https://86box.net/'
license=('custom')
makedepends=('git')
options=('!strip')
source=("${pkgname}::git+https://github.com/86Box/roms.git")
sha256sums=('SKIP')

pkgver() {
  cd ${pkgname}
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    cd "${srcdir}/${pkgname}"
    mkdir -p "$pkgdir/usr/share/86box/roms"
    cp -R floppy hdd machines network printer scsi sound video "$pkgdir/usr/share/86box/roms"
    install -Dm644 LICENSE "${pkgdir}/usr/share/licenses/${pkgname%-git}/LICENSE"
}
