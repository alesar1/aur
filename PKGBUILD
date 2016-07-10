# Maintainer Jordan Klassen <forivall at gmail dot com>

# Based on atom-editor-bin
# Maintainer Danny Arnold <despair.blue at gmail dot com>
# Contributor: Andre Miranda <andreldm1989 AT gmail DOT com>
# Contributor: Tom Bu <tom.bu AT members.fsf.org>
# Contributor: John Reese <john@noswap.com>
# Upstream URL: https://github.com/atom/atom

pkgname=atom-editor-beta-bin
_ver=1.9.0
_beta=beta0
pkgver="${_ver}.${_beta}"
pkgrel=4
pkgdesc="Chrome-based text editor from Github - Beta Channel - Precompiled binary from official repository"
arch=('x86_64')
url="https://github.com/atom/atom"
license=('MIT')
options=(!strip)
depends=('git' 'gconf' 'gtk2' 'libnotify' 'libxtst' 'nss' 'python2' 'xdg-utils' 'desktop-file-utils' 'alsa-lib' 'libgnome-keyring')
optdepends=('gvfs')
conflicts=('atom-editor-beta')
install=$pkgname.install

md5sums=('62e76d86363c32daba679687c8f7d42c'
         'b01684101e26d0d7cbebe4e8751854ba'
         'b05aef80afa76162ff9a1992cef3f0f9')
source=("atom-amd64-v${_ver}-${_beta}.deb::https://atom-installer.github.com/v${_ver}-${_beta}/atom-amd64.deb"
         atom-python.patch
         startupwmclass.patch)

package() {
  bsdtar xf data.tar.gz
  patch -p1 < "${srcdir}"/atom-python.patch
  patch -p1 < "${srcdir}"/startupwmclass.patch
  sed -i 's|env PYTHON=python2 GTK_IM_MODULE= QT_IM_MODULE= XMODIFIERS= /usr/share/atom-beta/atom|/usr/bin/atom-beta|' usr/share/applications/atom-beta.desktop
  chmod -R g-w usr
  mv usr "${pkgdir}"
}
