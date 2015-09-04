# Maintainer: Stephen Martin <stephenSRMMartin at gmail dot com>
pkgname=jasp-desktop-git
_pkgname=jasp-desktop
_buildname=jasp-build
pkgver=v0.7.1.12.r0.g942ebf7
pkgrel=1
pkgdesc="JASP, a low fat alternative to SPSS, a delicious alternative to R."
arch=('any')
url="http://jasp-stats.org"
license=('AGPL3')
depends=('qt5-base' 'r' 'libarchive' 'qt5-webkit' 'qt5-declarative' 'qt5-sensors' 'qt5-svg' 'tk' 'curl' 'jasp-rbundle')
makedepends=('git' 'qtchooser' 'r' 'gcc-fortran' 'boost')
provides=('jasp' 'jasp-desktop')
conflicts=('jasp' 'jasp-desktop')
install=('jasp-desktop-git.install')
source=("$_pkgname::git+https://github.com/jasp-stats/$_pkgname.git" 
	"jasp-desktop.svg"
	"sem.patch")

pkgver() {
  cd "$srcdir/$_pkgname"
  ( set -o pipefail
  git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
  )
}

prepare() {
  cd $srcdir/$_pkgname
  patch -p1 < $srcdir/sem.patch
  mkdir -p $srcdir/$_buildname
  cd $srcdir/$_buildname
  
  echo "Creating Makefile"
  qmake PREFIX=/usr ../$_pkgname
}

build() {
  cd $srcdir/$_buildname
  make 
}

package() {
  #Install files
  cd $srcdir/$_buildname
  mkdir -p $pkgdir/usr/share/$_pkgname
  cp -r ./Help ./JASP ./JASPEngine ./Resources $pkgdir/usr/share/$_pkgname/

  #Install icon
  mkdir -p $pkgdir/usr/share/pixmaps/
  cp $srcdir/jasp-desktop.svg $pkgdir/usr/share/pixmaps/

  #Install .desktop file
  mkdir -p $pkgdir/usr/share/applications
cat  << EOF > $pkgdir/usr/share/applications/jasp-desktop.desktop
[Desktop Entry]
Name=JASP Desktop
GenericName=Statistical Program
Comment=A low fat alternative to SPSS, a delicious alternative to R.
Exec=/usr/share/jasp-desktop/JASP
Icon=jasp-desktop
Type=Application
Categories=Science;
EOF
}
md5sums=('SKIP'
         'bcaf403001283553bb63b72c268d0290'
         '9e04c417faac1e36f7ddb9f8350620ab')
