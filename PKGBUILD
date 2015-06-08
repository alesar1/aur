# Maintainer: Hilinus <itahilinus at hotmail dot it>
# Contributor: Alucryd <alucryd at gmail dot com>

pkgname=teamviewer8
pkgver=8.0.20931
pkgrel=1
pkgdesc="All-In-One Software for Remote Support and Online Meetings"
arch=('i686' 'x86_64')
url="http://www.teamviewer.com"
license=('custom')
depends=('bash')
conflicts=('teamviewer')
install=${pkgname}.install

if [[ $CARCH == 'i686' ]]; then
  source=("teamviewer_linux-${pkgver}.deb::http://www.teamviewer.com/download/version_8x/teamviewer_linux.deb")
  md5sums=('218ecec198d5e6ce30958736d88e6645')
  depends+=('alsa-lib' 'gcc-libs' 'libxdamage' 'libxtst' 'zlib' 'freetype2')
elif [[ $CARCH == 'x86_64' ]]; then
  source=("teamviewer_linux_x64-${pkgver}.deb::http://www.teamviewer.com/download/version_8x/teamviewer_linux_x64.deb")
  md5sums=('bb2c1f70b6d58379aca987e57435293c')
  depends+=('lib32-gcc-libs' 'lib32-alsa-lib' 'lib32-libxtst' 'lib32-libxdamage' 'lib32-zlib' 'lib32-freetype2')
fi

build() {
  cd "${srcdir}"
  tar -xf data.tar.gz
}

package() {
  cd "${srcdir}"

# Install
  cp -dr --no-preserve=ownership {etc,opt,usr,var} "${pkgdir}"/

# Additional files
  rm "${pkgdir}"/opt/teamviewer8/tv_bin/xdg-utils/xdg-email
  install -dm 755 "${pkgdir}"/usr/{lib/systemd/system,share/applications,share/licenses/teamviewer}
  install -m 644 "${pkgdir}"/opt/teamviewer8/tv_bin/script/teamviewerd.service "${pkgdir}"/usr/lib/systemd/system/teamviewerd.service
  ln -s /opt/teamviewer8/tv_bin/desktop/teamviewer-teamviewer8.desktop "${pkgdir}"/usr/share/applications/teamviewer.desktop
  ln -s /opt/teamviewer8/License.txt "${pkgdir}"/usr/share/licenses/teamviewer/LICENSE
}
