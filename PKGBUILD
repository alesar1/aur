# Maintainer: Marcin Nowak <marcin.j.nowak+aur AT gmail DOT com>

pkgname=fractalus
pkgver=0.9.0
pkgrel=1
pkgdesc='A fan remake of Rescue on Fractalus, a classic game developed by Lucasfilm Games originally released on Atari, Commodore 64 and other platforms in 1984.'
url=https://www.lsdwa.com/projects/fractalus/
source=(
    "http://downloads.gcloud.lsdwa.com/projects/fractalus/fractalus-$pkgver-linux.tgz"
    "${pkgname}.desktop"
    "fractalus"
    )
arch=('x86_64')
sha256sums=(
"03c62dbb43aba31de19eb0f0662d77626eaf8aed06c02cfe6a539be585beb097"
"2b6ed647553bc49888b5ad87e37e461b6cdae71c5b43ee396b52d41466a9c77d"
"d0c6d22e779f56add988a5343ed9521790b5d01d0d9ce0bf878455ffcdf4e013"
)
license=("unknown")

package(){
    install -dm755 ${pkgdir}/opt
    install -dm755 ${pkgdir}/usr/bin
    mkdir -p ${pkgdir}/opt/${pkgname}
    cp -R * ${pkgdir}/opt/${pkgname}
    chmod 755 ${pkgdir}/opt/${pkgname}
    install -Dm644 "${pkgname}.desktop" "${pkgdir}/usr/share/applications/${pkgname}.desktop"
    install -Dm755 "${pkgname}" "${pkgdir}/usr/bin/"
}
