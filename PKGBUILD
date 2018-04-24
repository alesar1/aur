# Maintainer: juanrubio

_githubname=tizonia-openmax-il
pkgname=tizonia-all-git
pkgver=0.14.0.r10.gf63431bd
pkgrel=1
pkgdesc="Command-line cloud music player for Linux with support for Spotify, Google Play Music, YouTube, SoundCloud, Dirble, Plex servers and Chromecast devices."
arch=('x86_64')
url="https://www.tizonia.org"
license=('LGPL')
depends=(
    # official repositories:
    'libmad'
    'sqlite'
    'libutil-linux'
    'taglib'
    'mediainfo'
    'sdl'
    'lame'
    'faad2'
    'libcurl-gnutls'
    'libvorbis'
    'libvpx'
    'mpg123'
    'opus'
    'opusfile'
    'libogg'
    'libfishsound'
    'flac'
    'liboggz'
    'libsndfile'
    'alsa-lib'
    'libpulse'
    'boost'
    'check'
    'python2-pafy'

    # AUR:
    'log4c'
    'libspotify'
    'python2-gmusicapi'
    'python2-soundcloud-git'
    'python2-youtube-dl-git'
    'python2-pychromecast-git'
    'python-plexapi'
    'python2-fuzzywuzzy'
    'python2-eventlet-git'
)
provides=('tizonia-all')
conflicts=('tizonia-all')
source=("${pkgname}"::"git+https://github.com/tizonia/${_githubname}.git")
sha256sums=('SKIP')

pkgver() {
    cd "$pkgname"
    local _version="$(git tag | sort -Vr | head -n1 | sed 's/^v//')"
    local _revision="$(git rev-list v"${_version}"..HEAD --count)"
    local _shorthash="$(git rev-parse --short HEAD)"
    printf '%s.r%s.g%s' "$_version" "$_revision" "$_shorthash"
}

prepare() {
  mkdir -p "$srcdir/path"
  # Tizonia expects Python 2
  ln -sf /usr/bin/python2 "$srcdir/path/python"
  ln -sf /usr/bin/python2-config "$srcdir/path/python-config"
}

build() {
    export PATH="$srcdir/path:$PATH"
    export PYTHON="/usr/bin/python2"
    cd "$pkgname"
    autoreconf -ifs
    ./configure \
        --prefix=/usr \
        --sysconfdir=/etc \
        --localstatedir=/var \
        --silent \
        --enable-silent-rules \
        CFLAGS='-O2 -s -DNDEBUG' \
        CXXFLAGS='-O2 -s -DNDEBUG -fstack-protector --param=ssp-buffer-size=4 -Wformat -Werror=format-security'
    make
}

package() {
    cd "$pkgname"
    make DESTDIR="$pkgdir/" install
}
