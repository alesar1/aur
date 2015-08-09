# This is an example PKGBUILD file. Use this as a start to creating your own,
# and remove these comments. For more information, see 'man PKGBUILD'.
# NOTE: Please fill out the license field for your package! If it is unknown,
# then please put 'unknown'.

# See http://wiki.archlinux.org/index.php/VCS_PKGBUILD_Guidelines
# for more information on packaging from GIT sources.

# Maintainer: Tao-Yi Lee <tylee@ieee.org>
pkgname=apache_spark
pkgver=1.4.1
pkgrel=1
pkgdesc="Apache Spark™ is a fast and general engine for large-scale data processing."
arch=('x86_64')
url=""
license=('GPL')
groups=()
depends=()
makedepends=('git')
provides=()
conflicts=()
replaces=()
backup=()
options=()
install=
source=('git://github.com/apache/spark.git')
noextract=()
md5sums=('SKIP') #generate with 'makepkg -g'

_gitroot=git://github.com/apache/spark.git
_gitname=spark

build() {
  cd "$srcdir"
  msg "Connecting to GIT server...."

  if [[ -d "$_gitname" ]]; then
    cd "$_gitname" && git pull origin  master
    msg "The local files are updated."
  else
    git clone "$_gitroot" "$_gitname"
  fi

  msg "GIT checkout done or server timeout"
  msg "Starting build..."

  rm -rf "$srcdir/$_gitname-build"
  git clone "$srcdir/$_gitname" "$srcdir/$_gitname-build"
  cd "$srcdir/$_gitname-build"

  #
  # BUILD HERE
  #
  export JAVA_HOME=/usr/lib/jvm/default
  ./make-distribution.sh --name custom-spark --tgz -Phadoop-2.4 -Pyarn
}

package() {
  cd "$srcdir/$_gitname-build"
  #make DESTDIR="$pkgdir/" install
}

# vim:set ts=2 sw=2 et:
