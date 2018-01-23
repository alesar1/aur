# Maintainer: Frederic Bezies <fredbezies at gmail dot com>
# Contributor: Jonas Heinrich <onny@project-insanity.org>

pkgname=sejda-desktop
pkgver=3.3.0
pkgrel=1
license=('custom:EULA')
pkgdesc='PDF editor'
arch=('x86_64')
url='http://www.sejda.com/desktop'
source=("https://bitbucket.org/sejdapdf/sejda-desktop-public/downloads/sejda-desktop_${pkgver}_amd64.deb")
sha512sums=('8f6f0e91407259a838ad8d624513f106ed180c195d35a6dd92a3efd4c4819868f3edbbcd2056ee6a58307a62c544e7306c3f235afaa037dbe6be6fd99144c31b')
options=(!strip)

package() {
  bsdtar -xf data.tar.xz -C "${pkgdir}"
  install -d "${pkgdir}/usr/bin"
  ln -s /opt/sejda-desktop/sejda-desktop "${pkgdir}/usr/bin/sejda-desktop"

  # fix permissions
  find "${pkgdir}" -type d -exec chmod 755 {} \;

  # symlink licenses
  install -d "${pkgdir}/usr/share/licenses/${pkgname}"
  for _i in EULA.pdf LICENSE.electron LICENSES.chromium.html; do
    ln -s /opt/sejda-desktop/${_i} "${pkgdir}/usr/share/licenses/${pkgname}/${_i}"
  done
}
sha512sums=('13f8ab22b83a0ba8220cda89e63888b638e9aa1920d13c22f21155cd2e8e0933500eb0cee32686e3eeaabcc8bd0a2ffd0fdc1d5e9d71eaa24acc159b7090a484')
