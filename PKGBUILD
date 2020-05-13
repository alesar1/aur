# Maintainer:  Dimitris Kiziridis <ragouel at outlook dot com>
# Contributor: Jean Lucas <jean@4ray.co>

pkgname=hunter
pkgver=1.3.5
pkgrel=2
pkgdesc='Ranger-like CLI file browser written in Rust'
arch=('i686' 'x86_64')
url='https://github.com/rabite0/hunter'
license=('custom:WTFPL')
provides=('hunter')
depends=('gst-plugins-base-libs' 'libsixel')
makedepends=('rustup'
             'gst-plugins-good'
             'gst-plugins-bad'
             'gst-plugins-ugly')
optdepends=('gst-plugins-good: Media support'
            'gst-plugins-bad: Media support'
            'gst-plugins-ugly: Media support'
            'gst-libav: Media support'
            'nerd-fonts-complete: Icon pack support'
            'bat: Syntax highlighting'
            'highlight: Syntax highlighting'
            'libarchive: Archive support'
            'p7zip: Archive support'
            'atool: Archive support'
            'w3m: HTML support'
            'links: HTML support'
            'elinks: HTML support'
            'lynx: HTML support'
            'poppler: PDF support'
            'mupdf-tools: PDF support'
            'fzf: Default file finder')
source=("${pkgname}-${pkgver}.tar.gz::${url}/archive/v${pkgver}.tar.gz")
sha256sums=('f0f9bf2b4defeeb83e339b984407eb717cb1cb9fffb358e65780e89aa72c906a')

build() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  rustup override set nightly
  cargo build --release
}

package() {
  cd "${srcdir}/${pkgname}-${pkgver}"
  install -D target/release/hunter{,-media} -t "${pkgdir}"/usr/bin
  install -Dm644 README.md -t "${pkgdir}"/usr/share/doc/hunter
  install -Dm644 LICENSE -t "${pkgdir}"/usr/share/licenses/hunter
}