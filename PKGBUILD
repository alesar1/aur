# Maintainer:  Vincent Grande <shoober420@gmail.com>
# Contributor: Kamran Mackey <kamranm1200@gmail.com>

pkgname=cmus-minimal-git
pkgver=v2.8.0.r24.gd1290d5
pkgrel=1
pkgdesc="Small, fast and powerful console music player for Unix-like operating systems."
arch=('x86_64' 'aarch64')
url="https://cmus.github.io/"
depends=('ncurses')
makedepends=('git')
optdepends=('alsa-lib: for ALSA output plugin support'
	    'oss: for Open Sound System output plugin support'
            'libao: for AO output plugin support'
            'libpulse: for PulseAudio output plugin support'
            'faad2: for AAC input plugin support'
            'ffmpeg: for ffmpeg input plugin support'
            'flac: for flac input plugin support'
            'jack: for jack plugin support'
            'libmad: for mp3 input plugin support'
            'libmodplug: for modplug input plugin support'
            'libmp4v2: for mp4 input plugin support'
            'libmpcdec: for musepack input plugin support'
            'libsamplerate: for sampe rate converter support'
            'libvorbis: for vorbis input plugin support'
	    'libdiscid: audio cd support'
            'libcdio-paranoia: for cdio support'
            'opusfile: for opus input plugin support'
            'wavpack: for wavpack input plugin support')
conflicts=('cmus')
provides=('cmus')
license=('GPL')
source=(git://github.com/cmus/cmus)
sha512sums=('SKIP')
_gitname=cmus

pkgver() {
  cd "$_gitname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$_gitname"
  ./configure prefix=/usr
  make
}

package() {
  cd "$_gitname"
  make DESTDIR="$pkgdir" install
  install -Dm644 contrib/cmus.bash-completion "$pkgdir"/usr/share/bash-completion/completions/cmus
  install -Dm644 contrib/_cmus "$pkgdir"/usr/share/zsh/site-functions/_cmus
}
