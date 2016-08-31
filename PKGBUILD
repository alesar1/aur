# Maintainer:  max.bra <max dot bra at alice dot it>

pkgname=pi-hole-standalone
_pkgname=pi-hole
pkgver=2.9
pkgrel=1
pkgdesc='The Pi-hole is an advertising-aware DNS/Web server. Arch alteration for standalone PC.'
arch=('any')
license=('GPL2')
url="https://github.com/jacobsalmela/pi-hole"
depends=('dnsmasq' 'openresolv')
conflicts=('pi-hole-server')
install=$pkgname.install
backup=('etc/pihole/whitelist.txt' 'etc/pihole/blacklist.txt')

source=(https://github.com/$_pkgname/$_pkgname/archive/v$pkgver.tar.gz
	configuration
	dnsmasq.complete
	dnsmasq.include
	$_pkgname-gravity.service
	$_pkgname-gravity.timer
	whitelist.txt
	blacklist.txt)

md5sums=('ef5809f22af94673012811876e0268d8'
         '925e5f23e36320ec13f55cff3f1bdcb7'
         'fa485f038d577c354068410ed1159d94'
         '1b2e808b699a6b58647641f12379f65d'
         '09a4bb7aef7bbe1a1f4c6c85c1fd48b4'
         'd42a864f88299998f8233c0bc0dd093d'
         'd41d8cd98f00b204e9800998ecf8427e'
         'd41d8cd98f00b204e9800998ecf8427e')

prepare() {
  _ssc="/tmp/sedcontrol"

  # change local ip to unusable 0.0.0.0 (ref. http://dlaa.me/blog/post/skyhole), and :: for ipv6
  sed -n "/if \[\[ -f \${piholeIPfile} \]\]\;then/w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: change local ip to unusable 0.0.0.0 (ref. http://dlaa.me/blog/post/skyhole), and :: for ipv6 1" && return 1 ; fi
  sed -i '/if \[\[ -f \${piholeIPfile} \]\]\;then/,+15d' "$srcdir"/$_pkgname-$pkgver/gravity.sh

  sed -n "/blacklistScript=\/opt\/pihole\/blacklist.sh/w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: change local ip to unusable 0.0.0.0 (ref. http://dlaa.me/blog/post/skyhole), and :: for ipv6 2" && return 1 ; fi
  sed -i '/blacklistScript=\/opt\/pihole\/blacklist.sh/a piholeIP="0.0.0.0"\npiholeIPv6="::"' "$srcdir"/$_pkgname-$pkgver/gravity.sh

  sed -i 's|ipv4addr=\"\$piholeIP\"|ipv4addr=\"0.0.0.0\"|'"w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/blacklist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: change local ip to unusable 0.0.0.0 (ref. http://dlaa.me/blog/post/skyhole), and :: for ipv6 3" && return 1 ; fi
  sed -i 's|ipv6addr=\"\$piholeIPv6\"|ipv6addr=\"::\"|'"w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/blacklist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: change local ip to unusable 0.0.0.0 (ref. http://dlaa.me/blog/post/skyhole), and :: for ipv6 4" && return 1 ; fi
  sed -i 's|ipv4addr=\"\$piholeIP\"|ipv4addr=\"0.0.0.0\"|'"w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/whitelist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: change local ip to unusable 0.0.0.0 (ref. http://dlaa.me/blog/post/skyhole), and :: for ipv6 5" && return 1 ; fi
  sed -i 's|ipv6addr=\"\$piholeIPv6\"|ipv6addr=\"::\"|'"w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/whitelist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: change local ip to unusable 0.0.0.0 (ref. http://dlaa.me/blog/post/skyhole), and :: for ipv6 6" && return 1 ; fi

# -----------------

  # modify service management
  sed -i 's|\[\[ \${dnsmasqPid} \]\]|systemctl is-active dnsmasq 2\>\&1 \>\/dev\/null|'"w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 1" && return 1 ; fi
  sed -i "s|\${SUDO} killall -s HUP dnsmasq|\${SUDO} systemctl reload dnsmasq|w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 2" && return 1 ; fi
  sed -i "s|\${SUDO} service dnsmasq start|\${SUDO} systemctl start dnsmasq|w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 3" && return 1 ; fi

  sed -n "/dnsmasqPid\=/w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/whitelist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 4" && return 1 ; fi
  sed -i '/dnsmasqPid\=/d' "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/whitelist.sh
  sed -i 's|\[\[ \${dnsmasqPid} \]\]|systemctl is-active dnsmasq 2\>\&1 \>\/dev\/null|'"w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/whitelist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 5" && return 1 ; fi
  sed -i "s|\${SUDO} killall -s HUP dnsmasq|\${SUDO} systemctl reload dnsmasq|w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/whitelist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 6" && return 1 ; fi
  sed -i "s|\${SUDO} service dnsmasq start|\${SUDO} systemctl start dnsmasq|w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/whitelist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 7" && return 1 ; fi

  sed -n "/dnsmasqPid\=/w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/blacklist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 8" && return 1 ; fi
  sed -i '/dnsmasqPid\=/d' "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/blacklist.sh
  sed -i 's|\[\[ \${dnsmasqPid} \]\]|systemctl is-active dnsmasq 2\>\&1 \>\/dev\/null|'"w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/blacklist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 9" && return 1 ; fi
  sed -i "s|\${SUDO} killall -s HUP dnsmasq|\${SUDO} systemctl reload dnsmasq|w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/blacklist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 10" && return 1 ; fi
  sed -i "s|\${SUDO} service dnsmasq start|\${SUDO} systemctl start dnsmasq|w $_ssc" "$srcdir"/$_pkgname-$pkgver/advanced/Scripts/blacklist.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: modify service management 11" && return 1 ; fi

# -----------------

  # setting up and securing pihole wrapper script
  sed -n "/function debugFunc {/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 1" && return 1 ; fi
  sed -i '/function debugFunc {/,+4d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -n "/function flushFunc {/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 2" && return 1 ; fi
  sed -i '/function flushFunc {/,+4d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -n "/function updateDashboardFunc {/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 3" && return 1 ; fi
  sed -i '/function updateDashboardFunc {/,+4d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -n "/function setupLCDFunction {/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 4" && return 1 ; fi
  sed -i '/function setupLCDFunction {/,+4d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -n "/function uninstallFunc {/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 5" && return 1 ; fi
  sed -i '/function uninstallFunc {/,+4d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -n "/function chronometerFunc {/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 6" && return 1 ; fi
  sed -i '/function chronometerFunc {/,+4d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -n "/\-[d,f,u,s,c]/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 7" && return 1 ; fi
  sed -i '/\-[d,f,u,s,c]/d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -n "/uninstall/w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 8" && return 1 ; fi
  sed -i '/uninstall/d' "$srcdir"/$_pkgname-$pkgver/pihole

  sed -i "s|/opt/pihole|/usr/bin|w $_ssc" "$srcdir"/$_pkgname-$pkgver/pihole
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: setting up and securing pihole wrapper script 9" && return 1 ; fi

# -----------------

  # gravity call paths changing
  sed -i "s|/opt/pihole/|/usr/bin/|w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: gravity call paths changing" && return 1 ; fi

# -----------------

  # adlists.default is already there
  sed -i "s/\${SUDO} cp \/etc\/.pihole\/adlists.default \/etc\/pihole\/adlists.default//w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: adlists.default is already there" && return 1 ; fi

# -----------------

  # arch useless
  sed -n "/#ensure \/etc\/dnsmasq\.d\//w $_ssc" "$srcdir"/$_pkgname-$pkgver/gravity.sh
  if [ -s $_ssc ] ; then rm $_ssc ; else echo "   ==> Sed error: arch useless" && return 1 ; fi
  sed -i '/#ensure \/etc\/dnsmasq\.d\//,+5d' "$srcdir"/$_pkgname-$pkgver/gravity.sh
}

package() {
  cd "$srcdir"
  install -Dm755 ./$_pkgname-$pkgver/gravity.sh "$pkgdir"/usr/bin/gravity.sh || return 1
  install -Dm755 ./$_pkgname-$pkgver/pihole "$pkgdir"/usr/bin/pihole || return 1
  install -Dm755 ./$_pkgname-$pkgver/advanced/Scripts/blacklist.sh "$pkgdir"/usr/bin/blacklist.sh || return 1
  install -Dm755 ./$_pkgname-$pkgver/advanced/Scripts/whitelist.sh "$pkgdir"/usr/bin/whitelist.sh || return 1

  install -dm755 "$pkgdir/usr/lib/systemd/system/multi-user.target.wants"
  install -Dm644 "$_pkgname-gravity.timer" "$pkgdir/usr/lib/systemd/system/$_pkgname-gravity.timer"
  install -Dm644 "$_pkgname-gravity.service" $pkgdir/usr/lib/systemd/system/$_pkgname-gravity.service
  ln -s ../$_pkgname-gravity.timer "$pkgdir/usr/lib/systemd/system/multi-user.target.wants/$_pkgname-gravity.timer"

  install -dm777 "$pkgdir"/etc/pihole
  install -dm755 "$pkgdir"/etc/pihole/configs
  install -Dm644 ./$_pkgname-$pkgver/adlists.default "$pkgdir"/etc/pihole/adlists.default || return 1
  install -Dm644 whitelist.txt "$pkgdir"/etc/pihole/whitelist.txt || return 1
  install -Dm644 blacklist.txt "$pkgdir"/etc/pihole/blacklist.txt || return 1
  install -Dm644 dnsmasq.complete "$pkgdir"/etc/pihole/configs/dnsmasq.complete || return 1
  install -Dm644 dnsmasq.include "$pkgdir"/etc/pihole/configs/dnsmasq.include || return 1
  install -Dm644 configuration "$pkgdir"/usr/share/doc/pihole/configuration || return 1
}

