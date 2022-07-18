# Maintainer: Nikita Ivanov <nikita dot vyach dot ivanov at gmail dot com>
_name=ctpv
pkgname="${_name}-git"
pkgver=r179.4e05a76
pkgrel=1
pkgdesc="Terminal previewer"
arch=('i686' 'x86_64')
url="https://github.com/NikitaIvanovV/ctpv"
license=('MIT')
depends=('file' 'openssl' 'imagemagick' 'coreutils')
makedepends=('git')
optdepends=(
    'colordiff: for diffs'
    'diff-so-fancy: for diffs'
    'git-delta: for diffs'
    'elinks: for HTML files'
    'lynx: for HTML files'
    'w3m: for HTML files'
    'bat: for text files'
    'highlight: for text files'
    'source-highlight: for text files'
    'atool: for archives'
    'jq: for JSON files'
    'ueberzug: for images'
    'chafa: for images'
    'ffmpegthumbnailer: for videos'
    'mdcat: for Markdown files'
    'perl-image-exiftool: for media files'
    'libreoffice-fresh: for documents'
    'poppler: for PDF files'
    'transmission-cli: for torrent files'
)
source=("git+$url?signed")
sha512sums=('SKIP')
validpgpkeys=('701DE74D84F87EE1BC91CD216E656AC5B97B5133')

pkgver() {
    cd "$srcdir/${_name}"
    printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
    local license_prefix="$pkgdir/usr/share/licenses/$pkgname"
    mkdir -p "$license_prefix"
    cp "$srcdir/$_name/LICENSE" "$license_prefix"

    cd "$srcdir/${_name}"
	LDFLAGS=-L/usr/lib make PREFIX="/usr" DESTDIR="$pkgdir" install
}
