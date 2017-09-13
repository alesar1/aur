# Maintainer: Sky Chan <diufanshu@gmail.com>

# Based on atom-editor-beta-bin
# Maintainer Jordan Klassen <forivall at gmail dot com>
#
# Based on atom-editor-bin
# Maintainer Danny Arnold <despair.blue at gmail dot com>
# Contributor: Andre Miranda <andreldm1989 AT gmail DOT com>
# Contributor: Tom Bu <tom.bu AT members.fsf.org>
# Contributor: John Reese <john@noswap.com>
# Contributor: Samantha McVey <samantham@posteo.net>
# Upstream URL: https://github.com/atom/atom

pkgname=atom-editor-beta-bin-mirror
_pkgver=1.21.0
_pkgrel=0
pkgver=${_pkgver}.beta${_pkgrel}
pkgver() {
  curl -sS https://npm.taobao.org/mirrors/atom | grep -Eo '>.*?beta'+${_pkgrel} | sort -V | tail -n 1 | sed -e 's/>//' -e 's/-/./'
}
get_version() {
   printf "%s" $(pkgver) | sed -e 's/\(.*\)\.beta/\1-beta/'
}
pkgrel=1
pkgdesc="Chrome-based text editor from Github - Beta Channel - Precompiled binary from official repository - Use source mirror host by npm.taobao.org in China"
arch=('x86_64')
url="https://github.com/atom/atom"
license=('MIT')
options=(!strip)
depends=('git' 'gconf' 'gtk2' 'libnotify' 'libxtst' 'nss' 'python2' 'xdg-utils' 'desktop-file-utils' 'alsa-lib' 'libgnome-keyring')
optdepends=('gvfs')
conflicts=('atom-editor-beta', 'atom-editor-beta-bin')
install=$pkgname.install

md5sums=('bb0231cd924efc85f34e81e3f5fbe6e4'
         '501719c940fcd9c3d82fb8edebdaae09'
         'b05aef80afa76162ff9a1992cef3f0f9')
source=("atom-amd64-$(get_version).deb::https://npm.taobao.org/mirrors/atom/$(get_version)/atom-amd64.deb"
         atom-python.patch
         startupwmclass.patch)

package() {
  tar xf data.tar.xz
  patch -p1 < "${srcdir}"/atom-python.patch
  patch -p1 < "${srcdir}"/startupwmclass.patch
  sed -i 's|env PYTHON=python2 GTK_IM_MODULE= QT_IM_MODULE= XMODIFIERS= /usr/share/atom-beta/atom|/usr/bin/atom-beta|' usr/share/applications/atom-beta.desktop
  chmod -R g-w usr
  mv usr "${pkgdir}"
}
