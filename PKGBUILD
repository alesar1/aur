# Maintainer: Dave Shoreman <aur [plus] mpv-thumbnail-script at dsdev dot io>
# Contributor: Dimitris Kiziridis <ragouel at outlook dot com>

pkgname=mpv-thumbnail-script
pkgver=0.4.8
pkgrel=1
pkgdesc="A Lua script to show preview thumbnails in mpv's OSC seekbar, sans external dependencies"
arch=('any')
url='https://github.com/marzzzello/mpv_thumbnail_script'
license=('GPL3')
depends=('mpv')
optdepends=('ffmpeg')
install=mpv-thumbnail-script.install
source=("${url}/releases/download/${pkgver}/mpv_thumbnail_script_server.lua"
    "${url}/releases/download/${pkgver}/mpv_thumbnail_script_client_osc.lua"
    'mpv_thumbnail_script.conf')
sha256sums=('e356324e8068721fdbbe401641561fa13392f02ed5166d873bc63cc2962941ee'
            'dc3029757fc8357d818c4bd64882e6dd34fb5c52ecff4c3abf9cdd37d684caba'
            '2cf5f96a0ef0ff96ec64a05af3392dd0d3a4fd2bad283c2d14d61e21a3634cac')

package() {
    local scripts="${pkgdir}/usr/share/mpv/scripts"

    install -Dm644 "${srcdir}/mpv_thumbnail_script_server.lua" -t "$scripts"
    install -Dm644 "${srcdir}/mpv_thumbnail_script_client_osc.lua" -t "$scripts"
    install -Dm644 "mpv_thumbnail_script.conf" -t "${pkgdir}/etc/mpv/script-opts"
}
