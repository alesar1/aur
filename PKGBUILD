# Maintainer:  Caleb Maclennan <caleb@alerque.com>

pkgname=casile
pkgver=0.4.0
pkgrel=1
pkgdesc='Caleb’s SILE publishing toolkit'
arch=('any')
url="https://github.com/sile-typesetter/$pkgname"
license=('LGPL3')
depends=('bc'
         'bcprov' # pdftk optdepend is required
         'entr'
         'epubcheck'
         'ghostscript'
         'git'
         'imagemagick'
         'inetutils'
         'inkscape'
         'java-commons-lang' # pdftk optdepend is required
         'jq'
         'kindlegen'
         'lua'
         'm4'
         'make'
         'moreutils'
         'nodejs'
         'otf-libertinus'
         'pandoc-sile-git'
         'perl'
         'pcre'
         'pdftk'
         'podofo'
         'poppler'
         'povray'
         'python'
         'sile'
         'sqlite'
         'tex-gyre-fonts'
         'texlive-core'
         'ttf-hack'
         'yq'
         'zint'
         'zsh')
_lua_deps=('colors'
           'filesystem'
           'yaml')
_perl_deps=('yaml'
            'yaml-merge-simple')
_python_deps=('isbnlib'
              'pandocfilters'
              'pantable'
              'ruamel-yaml'
              'usfm2osis-cw-git')
depends+=("${_lua_deps[@]/#/lua-}"
          "${_perl_deps[@]/#/perl-}"
          "${_python_deps[@]/#/python-}")
makedepends=('autoconf-archive' 'cargo' 'luarocks' 'rust' 'node-prune' 'yarn')
source=("$url/releases/download/v$pkgver/$pkgname-$pkgver.tar.xz")
sha256sums=('747a00610a44e6c9c008cfb28825dce8f0b1a7241f0b7a845c4134a8bb04ef2c')
prepare() {
    cd "$pkgname-$pkgver"
    export YARN_CACHE_FOLDER="$srcdir/node_modules"
    sed Makefile.am -i \
        -e 's/yarn \(install\|run\)/yarn --offline \1/' \
        -e 's/cargo \(build\|install\|test\)/cargo --offline \1/'
    autoreconf
    cargo fetch --locked
    yarn install --production --frozen-lockfile
}

build() {
    cd "$pkgname-$pkgver"
    export YARN_CACHE_FOLDER="$srcdir/node_modules"
    ./configure --prefix="/usr"
    make
}

check() {
    cd "$pkgname-$pkgver"
    make check
}

package () {
    cd "$pkgname-$pkgver"
    make DESTDIR="$pkgdir" install
    node-prune "$pkgdir/usr/share/casile/node_modules"
}
