# Maintainer: Massimiliano Torromeo <massimiliano.torromeo@gmail.com>

pkgname=logstash
pkgver=5.5.2
pkgrel=1
pkgdesc='A tool for managing events and logs'
arch=('any')
url='https://www.elastic.co/products/logstash'
license=('Apache License')
depends=('java-runtime-headless>=8')
install=logstash.install

source=("https://artifacts.elastic.co/downloads/$pkgname/$pkgname-$pkgver.tar.gz"
        "logstash.service"
        "logstash@.service"
        "user.conf"
        "bundle.config")
sha256sums=('95845b89964300a5596c0ba3966c48d4980524d741a9cd2b13e04a36e3e1d912'
            '48a0f2ddb54fb3a4039cbd97ad10e4a0a10ac79ae917bc6ecf29ce10109e2710'
            'a01ea29d4f53d785f6eb926ebfe445e64ed5b3dab5d0418848589dd79502d876'
            '18a68a59ddb0ce19778e83b65e68dd568d65b7180bf45b4cf298fb332d69eb26'
            'fe05315345e4489458c3eecac43726800109c1e390e74a14584096f6c041fee1')

prepare() {
  cd "$srcdir"/$pkgname-$pkgver
  rm -f bin/logstash.bat

	sed -e 's|LS_SETTINGS_DIR=.*|LS_SETTINGS_DIR="/etc/logstash/config"|' \
	    -i config/startup.options

  sed -e '1i [ -f /etc/profile.d/jre.sh ] && . /etc/profile.d/jre.sh' \
      -i bin/logstash.lib.sh

  cd vendor/jruby/lib/jni
  rm -rf *Darwin *Windows *SunOS *FreeBSD arm-* ppc64*
}

package() {
  cd "$srcdir"

  install -dm755 "$pkgdir"/usr/share "$pkgdir"/etc/conf.d
  cp -a logstash-$pkgver "$pkgdir"/usr/share/logstash

  cd "$pkgdir"/usr/share/logstash
  mv config/startup.options "$pkgdir"/etc/conf.d/logstash
  mv config "$pkgdir"/etc/logstash

  cd "$srcdir"
  install -Dm644 logstash.service "$pkgdir"/usr/lib/systemd/system/logstash.service
  install -Dm644 logstash@.service "$pkgdir"/usr/lib/systemd/system/logstash@.service
	install -Dm644 user.conf "$pkgdir"/usr/lib/sysusers.d/logstash.conf

  install -Dm644 bundle.config "$pkgdir"/usr/share/logstash/.bundle/config

  install -dm755 "$pkgdir"/var/lib/logstash
  install -dm755 "$pkgdir"/var/log/logstash
  install -dm755 "$pkgdir"/etc/logstash/conf.d
}
