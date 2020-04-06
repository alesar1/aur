# Maintainer: Cédric Schieli <cschieli@gmail.com>

pkgname=tvheadend-satip-server-git
_gitname='tvheadend-git'
pkgver=4.3.r1857.g221c29b40
pkgrel=1
pkgdesc="TV streaming server for Linux"
arch=('i686' 'pentium4' 'x86_64' 'arm' 'armv6h' 'armv7h' 'aarch64')
url="https://tvheadend.org/"
license=('GPL3')
depends=(
    'avahi'
    'ffmpeg'
    'libdvbcsa'
    'libfdk-aac'
    'libhdhomerun'
    'openssl'
    'pcre2'
    'uriparser'
)
makedepends=(
    'git'
    'python'
)
optdepends=(
    'xmltv: For an alternative source of programme listings'
)
provides=('tvheadend')
conflicts=('tvheadend' 'hts-tvheadend' 'hts-tvheadend-svn' 'tvheadend-git')
install=tvheadend.install
backup=('etc/conf.d/tvheadend')

source=(
    "${_gitname}::git+https://github.com/tvheadend/tvheadend.git#branch=master"
    'dvb-scan-tables::git+https://github.com/tvheadend/dtv-scan-tables.git#branch=tvheadend'
    'ignore-missing-libavresample.patch'
)
md5sums=(
    'SKIP'
    'SKIP'
    'ab3e00343f57b70b5e02a981e0a16055'
)

pkgver() {
    cd "${srcdir}/${_gitname}"
    git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

prepare() {
    cd "${srcdir}"
    _dvbscan="${_gitname}/data/dvb-scan"
    rm -rf "${_dvbscan}"
    cp -a "dvb-scan-tables" "${_dvbscan}"
    rm -rf "${_dvbscan}/.git"
    touch "${_dvbscan}/.stamp"

    cd "${_gitname}"
    patch -p1 -i ../ignore-missing-libavresample.patch
}

build() {
    cd "${srcdir}/${_gitname}"

    ./configure --prefix=/usr --mandir=/usr/share/man/man1 --release \
        --python=python3 \
        --enable-avahi \
        --enable-zlib \
        --disable-ffmpeg_static --enable-libav \
        --disable-libx264_static --enable-libx264 \
        --disable-libx265_static --enable-libx265 \
        --disable-libvpx_static --enable-libvpx \
        --disable-libtheora_static --enable-libtheora \
        --disable-libvorbis_static --enable-libvorbis \
        --disable-libfdkaac_static --enable-libfdkaac \
        --disable-libopus_static --enable-libopus \
        --disable-nvenc \
        --enable-vaapi \
        --enable-inotify \
        --enable-epoll \
        --disable-pcre --enable-pcre2 \
        --enable-uriparser \
        --enable-dvben50221 \
        --enable-dbus_1 \
        --disable-hdhomerun_static --enable-hdhomerun_client \
        --enable-tvhcsa
    make
}

package() {
    cd "${srcdir}/${_gitname}"
    make DESTDIR="$pkgdir/" install

    install -D -m 644 "${srcdir}/${_gitname}/rpm/tvheadend.service" \
        "$pkgdir/usr/lib/systemd/system/tvheadend.service"
    sed -i 's|/etc/sysconfig|/etc/conf.d|g' \
        "$pkgdir/usr/lib/systemd/system/tvheadend.service"

    install -d "$pkgdir/etc/conf.d"
    cat << EOF > "$pkgdir/etc/conf.d/tvheadend"
# Configuration file for the tvheadend service.

MALLOC_ARENA_MAX=4
OPTIONS="-u hts -g video -6 --http_port 9981 --htsp_port 9982"
EOF
}

