pkgname=uberwriter
pkgdesc="A simple Markdown editor that offers a lot of features."
pkgver=15.05.01
pkgrel=1
arch=('i686' 'x86_64')
url="http://uberwriter.wolfvollprecht.de/"
license=('GPL')
source=("http://ppa.launchpad.net/w-vollprecht/ppa/ubuntu/pool/main/u/uberwriter/uberwriter_15.05.01-publicubuntu4_all.deb")
md5sums=('SKIP')
depends=('python-gtkspellcheck' 'python-gobject' 'ttf-ubuntu-font-family' 'pandoc-bin' 'dconf' 'desktop-file-utils' 'gnome-web-photo' 'hicolor-icon-theme' 'morituri' 'passenger' 'python' 'python-cairo' 'python-levenshtein' 'python-pyenchant' 'texlive-bin' 'yelp' 'python-regex')
# I got these dependencies from debtap

package() {
	mkdir data
	tar xf data.tar.xz --directory data/
	# install -m644 data/* ${pkgdir}
	cp -r data/* ${pkgdir}
}