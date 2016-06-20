# Maintainer=rafaelsoaresbr <rafaelsoaresbr@gmail.com>
# kimchi-git
# Contributing: https://github.com/rafaelsoaresbr/kimchi-git.git
# Builds: https://gitlab.com/rafaelsoaresbr/kimchi-git/builds
#pkgbase=()
pkgname=('kimchi-git')

# Version
pkgver=2.1.0.r107.gbc6e7c5
pkgrel=1
#epoch=

# Generic
pkgdesc="An HTML5 management interface for KVM"
arch=('any')
url="http://kimchi-project.github.io/kimchi/"
license=('AGPL2.1' 'Apache')
groups=('kimchi-project')

# Dependencies
depends=('dnsmasq'
         'ebtables'
         'ginger-base'
         'libguestfs'
         'libvirt-python'
         'nfs-utils'
         'novnc'
         'open-iscsi'
         'python2-configobj'
         'python2-ethtool'
         'python2-ipaddr'
         'python2-lxml'
         'python2-magic'
         'python2-ordereddict'
         'python2-paramiko'
         'python2-pillow'
         'python2-pyparted'
         'python2-websocket-client'
         'qemu'
         'spice-html5'
         'ttf-font-awesome'
         'ttf-opensans'
         'wok')
#optdepends=()
makedepends=('git')
#checkdepends=()

# Package Relations
provides=('kimchi')
conflicts=('kimchi')
#replaces=()

# Others
#backup=()
#options=()
#install=
#changelog=

# Sources
source=('git+https://github.com/kimchi-project/kimchi.git')
#source_i686=("")
#source_x86_64=("")
#noextract=()
#validpgpkeys=()

# Integrity
#md5sums=()
#md5sums_i686=()
#md5sums_x86_64=()
#sha1sums=()
sha256sums=('SKIP')

pkgver() {
  cd $srcdir/kimchi
  git describe --long | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
  cd $srcdir/kimchi
}

build() {
  cd $srcdir/kimchi
  PYTHON=/usr/bin/python2 ./autogen.sh --system && make
}

#check() {
#}

package() {
  cd $srcdir/kimchi
  make DESTDIR=$pkgdir install
}
