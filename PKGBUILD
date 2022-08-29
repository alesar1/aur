pkgname=webcord-bin
pkgver=3.8.0
pkgrel=1
pkgdesc="A Discord and Fosscord client made with the Electron."
arch=('x86_64')
url="https://github.com/SpacingBat3/WebCord"
license=('MIT')
_name="${pkgname%-bin}"
provides=("${_name}")
conflicts=("${_name}")
options=('!emptydirs')

_archive="webcord-${pkgver}-1.x86_64.rpm"

source=("${_archive}::${url}/releases/download/v${pkgver}/${_archive}")
sha256sums=('1105d96063b9209e7873f065fe5f0db223b224096bc15c37c7388fd4775c52b9')
noextract=("${_archive}")

package() {
    cd "${srcdir}"

    bsdtar -xf "${_archive}" \
        -C "${pkgdir}" \
        --exclude="usr/lib/.build-id" \
        --exclude="usr/bin"

    local bin="${pkgdir}/usr/bin"
    local licenses="${pkgdir}/usr/share/licenses"
    install -dm755 "${bin}" "${licenses}"

    mv "${pkgdir}/usr/lib" "${pkgdir}/opt"
    mv "${pkgdir}/usr/share/doc/${_name}" "${licenses}/${pkgname}"
    ln -s "/opt/${_name}/${_name}" "${bin}/${_name}"
}
