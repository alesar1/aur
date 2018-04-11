# Maintainer: Milk Brewster <milk on freenode>
_pkgname="fmedia"
pkgname="${_pkgname}-git"
pkgver=v0.35.r1.7d3b827
pkgrel=1
pkgdesc="fast media player/recorder/converter"
arch=("x86_64")
url="http://fmedia.firmdev.com/"
license=('unknown')
groups=()
depends=('sqlite')
makedepends=('git' 'svn' 'flac' 'mpg123' 'libjpeg9' 'unzip' 'jdk8-openjdk')
provides=("${pkgname}" "fmedia")
conflicts=("${pkgname}" "fmedia")
replaces=()
backup=()
options=()
install=
source=('git+https://github.com/stsaz/fmedia'
        'git+https://github.com/stsaz/ffos'
        'git+https://github.com/stsaz/ff'
        'git+https://github.com/stsaz/ff-3pt'
        'git+https://github.com/gypified/libmp3lame#commit=d5ecd40'
)
noextract=()
md5sums=('SKIP'
         'SKIP'
         'SKIP'
         'SKIP'
         'SKIP')

pkgver() {
	cd "$srcdir/${_pkgname}"

# Git, tags available
	printf "%s" "$(git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
	cd "$srcdir/ff-3pt"
  mkdir _src
  curl -L "https://sourceforge.net/projects/lame/files/latest/download?source=files" --output "_src/lame-3.100.tar.gz"
  curl -L "https://sourceforge.net/projects/soxr/files/latest/download?source=files" --output "_src/soxr-0.1.3-Source.tar.xz"

  mkdir -p _bin/linux-amd64
  
  curl -L "https://github.com/stsaz/fmedia/files/1886262/fix-flac.txt" --output "flac/fix-flac.txt"
  cat flac/fix-flac.txt | patch -p1

	cd "$srcdir/ffos"
  curl -L "https://github.com/stsaz/fmedia/files/1887725/fix-linux-writev.txt" --output "fix-linux-writev.txt"
  cat fix-linux-writev.txt | patch -p1 

	cd "$srcdir/ff-3pt"
  echo && echo && make alac
  echo && echo && make dynanorm
  echo && echo && make fdk-aac
  echo && echo && make flac
  echo && echo && make lame
  echo && echo && make mac
  echo && echo && make mpg123
  echo && echo && make musepack
  echo && echo && make ogg
  echo && echo && make opus
  echo && echo && make soxr
  echo && echo && make vorbis
  echo && echo && make wavpack
}

build() {
  cd "$srcdir/${_pkgname}"
  export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:../ff-3pt/_bin/linux-amd64
	make FF3PTLIB=../ff-3pt/_bin/linux-amd64 install
}

check() {
	cd "$srcdir/${_pkgname}"
	# make -k check
}

package() {
	# cd "$srcdir/${_pkgname}"
  cd "$pkgdir"
  install -Dm755 "$srcdir/fmedia/fmedia-0/fmedia" "$pkgdir/opt/fmedia/fmedia"
  cp -r $srcdir/fmedia/fmedia-0/* $pkgdir/opt/fmedia/
  mkdir -p "$pkgdir/usr/bin/"
  ln -s "$pkgfir/opt/fmedia/fmedia" "$pkgdir/usr/bin/fmedia"
}
