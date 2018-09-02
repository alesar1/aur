# Maintainer: Muhkoenig

pkgname=nerd-fonts-inconsolata-go
pkgver=2.0.0
pkgrel=1
pkgdesc="Patched font InconsolataGo from nerd-fonts library"
arch=('any')
url='https://github.com/ryanoasis/nerd-fonts'
license=('MIT')
depends=('fontconfig' 'xorg-font-utils' 'wget')
source=(
    "InconsolataGo-v$pkgver.zip::https://github.com/ryanoasis/nerd-fonts/releases/download/v$pkgver/InconsolataGo.zip"
    "https://github.com/ryanoasis/nerd-fonts/raw/v$pkgver/LICENSE")
sha256sums=(
    '4a3860cb82de6e5e00dc13871269073a0367ccb75bc8d0f5d33d303e7d1e4986'
    'd2a29823384e9194a87936ccad495c764c2ef733b29bfa6f72a1d65803ce02e5')

package() {
    rm ${srcdir}/*Compatible.ttf
    install -d ${pkgdir}/usr/share/fonts/TTF
    install -d ${pkgdir}/usr/share/licenses/${pkgname}
    install -Dm644 ${srcdir}/*.ttf ${pkgdir}/usr/share/fonts/TTF
    install -Dm644 ${srcdir}/LICENSE ${pkgdir}/usr/share/licenses/${pkgname}
}
