# Maintainer: Mrmaxmeier <Mrmaxmeier+aur at gmail dot com>
# TODO: dynamically choose between /builds/.. and /builds/old/..

pkgname=bombsquad
pkgver=1.4.130
pkgrel=1
pkgdesc='An explosive arcade-style party game'
arch=('x86_64' 'i686')
url='http://www.froemling.net/apps/bombsquad'
license=('unknown')
depends=('openal' 'libgl' 'sdl2' 'libvorbis' 'libogg')
source=('bombsquad.sh' 'bombsquad.desktop')
sha256sums=('850f8a66eb045ce833f8d7dae4533f69b629ac648bd205d98bf5f851339d4515' '900ffdf250eb2c59a2944703ccab9b69e58b5cdd7809f8349f6291db0301935c')

source_i686=("http://www.files.froemling.net/bombsquad/builds/BombSquad_Linux_32bit_${pkgver}.tar.gz")
sha256sums_i686=('123f09b26afe1b665cb1267fbe045ffe94a71aec4d6d0ef838f5551a42f95cc3')

source_x86_64=("http://www.files.froemling.net/bombsquad/builds/BombSquad_Linux_64bit_${pkgver}.tar.gz")
sha256sums_x86_64=('db471119a91fc7bc8204c5a1838cb2bf72fcd307bc1ea06b08ae2bdef3ca33ee')


package() {
  case "$CARCH" in
  x86_64)
    cd "$srcdir"/BombSquad_Linux_64bit_"$pkgver"
    ;;
  i686)
    cd "$srcdir"/BombSquad_Linux_32bit_"$pkgver"
    ;;
  esac

  install -Dm755 bombsquad "$pkgdir"/usr/share/bombsquad/bombsquad
  install -dm755 data "$pkgdir"/usr/share/bombsquad/data
  cp -r data "$pkgdir"/usr/share/bombsquad/

  find "${pkgdir}/usr/share/bombsquad/data" -type f -exec chmod 644 {} \;
  find "${pkgdir}/usr/share/bombsquad/data" -type d -exec chmod 755 {} \;

  install -Dm 755 "$srcdir"/bombsquad.sh "$pkgdir"/usr/bin/$pkgname
  install -Dm 644 "$srcdir"/bombsquad.desktop "$pkgdir"/usr/share/applications/bombsquad.desktop
}


