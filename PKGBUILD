# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
pkgname=gedit-plugin-markdown_preview
pkgver=1.0
pkgrel=1
pkgdesc="A gedit plugin previewing markdown (.md) documents"
arch=('any')
url="https://github.com/maoschanz/gedit-plugin-markdown_preview"
license=('GPL3')
depends=('gedit' 'python-markdown' 'webkit2gtk')
optdepends=('pymdown-extensions: extra Python Markdown extensions'
            'python-pygments: for CodeHilite extension'
            'pandoc: export and stylesheet support'
            'texlive-bin: export to PDF with pandoc'
            'texlive-core: export to PDF with pandoc')
source=("$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('46eb4252628c2df8ba375b49f7b10b4a4b880d9213c2d1979796565e03ddc24d')

package() {
	cd "$pkgname-$pkgver"
	install -Dm644 org.gnome.gedit.plugins.markdown_preview.gschema.xml -t \
		"$pkgdir/usr/share/glib-2.0/schemas"
	install -Dm644 markdown_preview.plugin -t "$pkgdir/usr/lib/gedit/plugins"
	cp -r markdown_preview "$pkgdir/usr/lib/gedit/plugins"
	install -Dm644 example.css -t "$pkgdir/usr/share/doc/$pkgname"

	rm "$pkgdir/usr/lib/gedit/plugins/markdown_preview/locale/gedit-plugin-markdown-preview.pot"
	rm "$pkgdir"/usr/lib/gedit/plugins/markdown_preview/locale/{fr,nl}/LC_MESSAGES/*.po
}
