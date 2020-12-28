# Maintainer: Suphal Bhattarai suphalbhattarai4@gmail.com
pkgname=ttf-nepali-font-git
pkgver=3.0
pkgrel=1
pkgdesc="Collection Of Some Of The Pupular Nepali Fonts"
arch=(x86_64 i686)
url="https://github.com/SuphalBhattarai/ttf-nepali-fonts-git"
depends=(fontconfig)
makedepends=(git)
provides=(ttf-nepali-font-git)
source=("git+$url")

md5sums=('SKIP')

pkgver() {
  cd "${pkgname}"
  install -d "${pkgdir}/usr/share/fonts/TTF"
  printf "3.0.r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
  install -d "${pkgdir}/usr/share/fonts/TTF"
  install -m644 ttf-nepali-fonts-git/fonts/*.ttf "${pkgdir}/usr/share/fonts/TTF/"
}

post_install() {
    echo -n "Updating font cache... "
    fc-cache >/dev/null -f
    mkfontscale /usr/share/fonts/TTF
    mkfontdir /usr/share/fonts/TTF
    echo done
}
