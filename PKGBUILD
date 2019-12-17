# Maintainer: juanrubio

_githubname=tizonia-openmax-il
pkgname=tizonia-all
pkgver=0.19.0
pkgrel=1
pkgdesc="Command-line cloud music player for Linux with support for Spotify, Google Play Music, YouTube, SoundCloud, Plex servers and Chromecast devices."
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
    'python-pafy'
    'python-eventlet'
    'youtube-dl'
    'python-levenshtein'

    # AUR:
    'log4c'
    'libspotify'
    'python-gmusicapi'
    'python-soundcloud'
    'python-pychromecast'
    'python-plexapi'
    'python-fuzzywuzzy'
    'python-spotipy'
)
source=("${_githubname}-${pkgver}.tar.gz"::"https://github.com/tizonia/${_githubname}/archive/v${pkgver}.tar.gz")
md5sums=('dbe262665e0a4d05f1e25daa6733ca09')

prepare() {
  command -v tizonia &> /dev/null \
      && { \
      echo >&2 "Please uninstall tizonia-all or tizonia-all-git before proceeding." ; \
      echo >&2 "See https://github.com/tizonia/tizonia-openmax-il/issues/485." ; \
      exit 1; }
  mkdir -p "$srcdir/path"
}

build() {
    cd "${_githubname}-${pkgver}"
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
    cd "${_githubname}-${pkgver}"
    make DESTDIR="$pkgdir/" install
}
