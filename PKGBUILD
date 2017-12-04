pkgname=errbot
pkgver=5.1.3
pkgrel=1
pkgdesc="a chatbot. It allows you to start scripts interactively from your chatrooms for any reason: random humour, chatops, starting a build, monitoring commits, triggering alerts..."
arch=(any)
url="https://github.com/errbotio/errbot"
license=('GPL')
options=('emptydirs')
backup=('etc/errbot/config.py')
depends=('python-daemonize' 'python-dnspython3' 'python-pygments-markdown-lexer'
	 'python-ansi' 'python-markdown' 'python-yapsy' 'python-colorlog'
	 'python-pyopenssl' 'python-rocket-errbot' 'python-bottle' 'python-webtest'
	 'python-sleekxmpp' 'python-jinja')
source=("$pkgname-$pkgver.tar.gz::https://github.com/errbotio/errbot/archive/$pkgver.tar.gz"
	"errbot.config.py"
	"errbot.service")
sha256sums=('a2ce77ba72b7830c6430953c596e0a2b112da9bd0f0d992e45cdf344e50296d8'
            '23ba61c4fb3ec173cd62452662c667ed0fab10cfe8ee576ce82598664f147896'
            'e7e4b811c55183580ee821b5dfab99f39917f3c0d284fa7cad9ac086ab4808ec')

package() {
	cd "$pkgname-$pkgver"
	python3 setup.py install --root="$pkgdir/"

	install -Dm0644 "$srcdir"/errbot.service "$pkgdir"/usr/lib/systemd/system/errbot.service
	install -Dm0600 -o jabber -g jabber \
		"$srcdir"/errbot.config.py "$pkgdir"/etc/errbot/config.py
	install -dm0700 -o jabber -g jabber \
		"$pkgdir"/var/lib/errbot/{data,plugins}
}
