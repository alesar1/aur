# Maintainer: Platon Pronko <platon7pronko@gmail.com>
# Contributor: Benjamin Hedrich <code at pagenotfound.de>

pkgname=gerbera-git
pkgver=1.9.2.133+r4771.20211106.984c14d9
pkgrel=2
epoch=2
pkgdesc="UPnP Media Server (Based on MediaTomb)"
arch=(i686 x86_64 armv7h)
url="https://github.com/gerbera/gerbera"
license=('GPL2')
depends=('taglib' 'curl' 'sqlite' 'file' 'gcc-libs' 'libupnp' 'libmatroska'
   'duktape' 'libexif' 'expat' 'libebml' 'fmt' 'spdlog' 'pugixml' 'ffmpeg' 'ffmpegthumbnailer')
makedepends=('cmake' 'git')
install=gerbera.install
options=('emptydirs')
source=("$pkgname::git+https://github.com/gerbera/gerbera.git"
        gerbera.sysusers
        gerbera.tmpfiles)
conflicts=(gerbera)
provides=(gerbera)
sha256sums=('SKIP'
            'b3f956a6eaee8753cff7a04b51091b8b283dd0da054190ced13362a5b050d73f'
            '452f5d4b5661e0262cb4a48d62a54f5f26d53c6d3aebf502cde072214a8b30d8')

pkgver() {
    cd "$pkgname"
    _ver="$(git describe  --tags | sed 's|^v||' | sed 's|-[^-]*$||' | tr '-' '.')"
    _rev="$(git rev-list --count HEAD)"
    _date="$(git log -1 --date=format:"%Y%m%d" --format="%ad")"
    _hash="$(git rev-parse --short HEAD)"

    if [ -z "${_ver}" ]; then
        error "Version could not be determined."
        return 1
    else
        printf '%s' "${_ver}+r${_rev}.${_date}.${_hash}"
    fi
}

build() {
    cd "$pkgname"
    cmake . -DCMAKE_INSTALL_PREFIX=/usr -DCMAKE_BUILD_TYPE=Release -DWITH_AVCODEC=1 -DWITH_FFMPEGTHUMBNAILER=1
    make
}

package() {
    cd "$pkgname"
    make DESTDIR="$pkgdir/" install

    install -dm0755 "$pkgdir"/var/lib/gerbera
    install -dm0755 "${pkgdir}"/etc/gerbera
    install -Dm0644 "$srcdir"/gerbera.sysusers "$pkgdir"/usr/lib/sysusers.d/gerbera.conf
    install -Dm0644 "$srcdir"/gerbera.tmpfiles "$pkgdir"/usr/lib/tmpfiles.d/${pkgname}.conf
}
