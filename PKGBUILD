# Maintainer: sum01 <sum01@protonmail.com>
pkgname=('serious-engine-git')
pkgver=r396.dce3915
pkgrel=1
pkgdesc="A game engine developed by Croteam for the classic Serious Sam games."
arch=('i686' 'x86_64')
url="https://github.com/ptitSeb/Serious-Engine"
license=('GPL2')
depends=('sdl2' 'python' 'bash')
makedepends=('cmake' 'make' 'sed')
source=("git+https://github.com/ptitSeb/Serious-Engine.git")
sha256sums=('SKIP')
pkgver(){
  cd "$srcdir/Serious-Engine"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}
prepare(){
  cd "$srcdir/Serious-Engine/Sources/"
  if [[ $CARCH = "i686" ]]; then
      sed 's/cmake -DCMAKE_BUILD_TYPE=Debug/cmake -DTFE=TRUE -DCMAKE_BUILD_TYPE=Debug/g' build-linux32.sh > build-linux32-tfe.sh
      chmod 755 build-linux32-tfe.sh
  else
    sed 's/cmake -DCMAKE_BUILD_TYPE=Debug/cmake -DTFE=TRUE -DCMAKE_BUILD_TYPE=Debug/g' build-linux64.sh > build-linux64-tfe.sh
    chmod 755 build-linux64-tfe.sh
  fi
}
build(){
  cd "$srcdir/Serious-Engine/Sources/"
  if [[ $CARCH = "i686" ]]; then
    ./build-linux32.sh
    cp cmake-build/ssam ../Bin/
    cp cmake-build/Debug/* ../Bin/Debug/

    rm -rf cmake-build
    ./build-linux32-tfe.sh
    cp cmake-build/ssam-tfe ../Bin/
    cp cmake-build/Debug/* ../Bin/Debug/
  else
      ./build-linux64.sh
      cp cmake-build/ssam ../Bin/
      cp cmake-build/Debug/* ../Bin/Debug/
      
      rm -rf cmake-build
      ./build-linux64-tfe.sh
      cp cmake-build/ssam-tfe ../Bin/
      cp cmake-build/Debug/* ../Bin/Debug/
  fi
}
package(){
  mkdir -p "$pkgdir"/usr/{bin,lib/$pkgname}/
  mv "$srcdir/Serious-Engine" "$pkgdir/usr/lib/$pkgname/"
  ln -s /usr/lib/$pkgname/Serious-Engine/Bin/ssam "$pkgdir/usr/bin/ssam"
  ln -s /usr/lib/$pkgname/Serious-Engine/Bin/ssam-tfe "$pkgdir/usr/bin/ssam-tfe"
}
