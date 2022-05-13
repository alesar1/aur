# Maintainer: zer0def <zer0def@freenode>
# Maintainer: Björn Wiedenmann <archlinux cat xorxor dog de>
# Contributor: Jonathan Yantis <yantis cat yantis dog net>
# Contributor: Christian Hesse <mail cat eworm dog de>
# Contributor: Gaetan Bisson <bisson cat archlinux dog org>
# Contributor: Caspar Verhey <caspar at verhey dot net>
# Contributor: Seth Fulton  <seth cat sysfu dog com>
# Contributor: Aaron Griffin <aaron cat archlinux dog org>
# Contributor: judd <jvinet cat zeroflux dog org>
# Contributor: benetnash <benetnash cat mail dog icpnet dog pl>
# Contributor: Thomas Haider <t.haider cat vcnc dog org>

# Note: The bulk of this PKGBUILD is based off:
# https://aur.archlinux.org/packages/op/openssh-git/PKGBUILD
# https://aur.archlinux.org/packages/op/openssh-hpn/PKGBUILD

# IMPORTANT SECURITY NOTE:
# This PKGBUILD does NOT (!!!) follow the upstream
# OpenSSH-Portable distribution (at
# https://github.com/openssh/openssh-portable ) but rather a
# fork which is maintained by rapier (primarily for Gentoo
# Linux I believe). The fork includes the HPN patches and can be
# found at https://github.com/rapier1/openssh-portable
#
# Since I do NOT maintain this fork in any way, but merely
# package it for Arch Linux, there is absolutely no warranty for
# this code. It is very possible that the current version of the
# fork still contains open security bugs which have already been
# fixed in upstream OpenSSH.
#
# USE THIS PKGBUILD AT YOUR OWN RISK AND ONLY IF YOU FULLY
# UNDERSTAND THE SECURITY IMPLICATIONS OF NOT USING THE MOST
# RECENT OFFICIAL OPENSSH !
#
# Consider yourself warned.
#
# If security is paramount for you or in case of any doubt,
# please use the official OpenSSH distribution instead.

# This package should probably follow chutzpah@gentoo's patches in the future

pkgbase=openssh-hpn
pkgname=(
  openssh-hpn
  openssh-hpn-shim
)
_openssh_ver=8.9p1
_hpn_ver=hpn17v0
#_pkgver="$(sed -e 's/\./_/' -e 's/p/_P/' <<< ${_openssh_ver})_new"
_pkgver="$(sed -e 's/\./_/' -e 's/p/_P/' <<< ${_openssh_ver})"
pkgver="${_openssh_ver}.${_hpn_ver}"
pkgrel=2
pkgdesc='A Secure SHell server/client fork with High Performance patches included'
url='https://www.psc.edu/index.php/hpn-ssh/'
license=('custom:BSD')
arch=('x86_64' 'i486' 'i686' 'arm' 'armv6h' 'armv7h' 'aarch64')
depends=('krb5' 'ldns' 'libedit' 'openssl')
makedepends=('git' 'libfido2')
optdepends=('xorg-xauth: X11 forwarding'
            'x11-ssh-askpass: input passphrase in X'
            'libfido2: FIDO/U2F support')
conflicts=('openssh-hpn-git')
source=(
  "https://github.com/rapier1/openssh-portable/archive/hpn-${_pkgver}.tar.gz"
  'http://www.eworm.de/download/linux/openssh-tests-scp.patch'
  #'openssl11.patch'
  #'hpn-banner.patch'
  'glibc-2.31.patch'
  #'hpn14v22-globals-cleanup.patch'
  'hpnsshdgenkeys.service'
  'hpnsshd@.service'
  'hpnsshd.service'
  'hpnsshd.socket'
  'sshdgenkeys.service'
  'sshd@.service'
  'sshd.service'
  'sshd.socket'
  'sshd.pam')
backup=(
  'etc/ssh/ssh_config'
  'etc/ssh/sshd_config'
  'etc/pam.d/sshd'
  'etc/hpnssh/ssh_config'
  'etc/hpnssh/sshd_config'
  'etc/pam.d/hpnsshd'
)

sha512sums=(
  '190e4261a76ce5b31f8cdc76bc149c3c240611410461dd400e41ca55f4be4d5675473f16edbd648eaeb6d373136b831d61a9ae9f59c4e38ef8ecde738fda7880'
  '62e2d60fdd39243e6245d90a0940b67ac4e72d042d8146203d50cdaa2df51611d91831d3b152d42302490afd677ae3433a3eba975dee68dbf7c06728167bb6d4'
  #'5d96a288ae925584cdcde0305c511b18e3cfaed6cae49f5fc6f062f62100d10a087144e8263380d19a14dca71c745065ddaa0062542c2e2cfa1db04811d40dc7'
  #'a9ee92fd135c47a27ac260ab40c057f0e35c118efcb281e98e235158ffd8599acede67dcce6da4c2589b2a0bd794c587af80d4ce4f85c1b9823cb9acfbbe9050'
  'aeee097dbf46aa22f411d78a49b9db7b2451dd0351bb5f57c7b3159c7ddc29aa994cd43046c187033c474f8fb2952165536197139eb7c495db99f6697f41637d'
  #'beaa201496c1c670f5fe1e99b88308fff16502ed5ac0d6dce3077be9ea44f6e30d5cd0946e5bf5f11c4b174f9afe372fa198c8ef278f5c5511aa2410d3441ec2'
  'f2f0d0f964a3e1a1ad2ab05d59c81c3dd330fa68970030f98c33bd14c5e635aa8f2b35d81ac79678d3dbd107471b5375d240a630ad70e419bf88d2df1df9c87e'
  '6d7b6ad90f09fd6ab395b485c30921696b617318e6f6d587a18438f292a2c4c33f6d6150b19393e89c4c5c582b9632aea8b7b6aa220af29c084f5e5bfeade611'
  '3abe76d3ed971f4ef69013732f5be4cdfb8de0a12705b5d7190907a543c6d044bf064ff637f4511e4d95fbab58066ede8d0cce996d1adb1c2ec917be980f228a'
  '6ebf291ada773fcc73661b2065ce75f95718bc9c562d14323faf6802a4d45e42f49689a4a1fc470530fa183d4973468d9a5b18acf90f7ada8b008f0f61038d14'
  'd976febf9118c7803765ab2c6634cdbc130bccb2f5b9995737d0c9b0346001f2299a47f1a552c867283fe9d6fd07cca71df3729d958dc137f51f285e867348de'
  'f8e38835a46f24b4e49c674658a34ccdf2deff1cf2f87316886e9f3794579d8b56e80dac91a5309d6029b0196691b3512f62b957f10165b98e1452b8292c8f62'
  'aaa3f0e9ee686b7208ef94e373007a57e5f62020339399d6abbbeba276acedb1868d62c0401c901fd021f9287b263347b699c0d4b65f503fa57bafef5f4b8829'
  'ea1d31d84ca30fffa60b6eb06d1f532c75ff5a8acec893479cbe0f3669c62e5da9ee81be8549bae75d63e4b6fe69a4ffe6dfd4e3008e731e320d6da4bc4beae9'
  '298e47a21c337101974fa5237b3110aa3c7638b5fa53bd07661413236c8ed3212b431abaeffd875af6c9a72b4f8e1c8512e1e1960cbfff15bfee62b32d305fc3'
)

b2sums=(
  '867fc8e0c7d8c4f24982910c0c207c5afe6e082df83dbcd3c0ec2c9b439050e2289c626f6e59ef6ab12c8f65522c7e24949d6abb611037e943013eaf7144c905'
  '1e6c8d39052bdc268c584488341e260a2695d4b9afabca41919710bb34833dd580ff1813c01b8ba91f2629273c8101ce0ed3b2749dabce054137b4ef37b2a548'
  #'051b7c350333ce57a4a5e57ba0f693aed4491a241fd9e65cf2a861773571b44b8d4ffa06506a0c4a05399a46108ec05321e69f210637f32e25c76e683b224505'
  #'b46019363a19e2a0c397d66b6f1dc24d1c1219372b7fd699d92a9c382b24b02437b37cb12b3bba7e3ca97cfe98170ad21fff5871daf2070bc3d175fe0b31680b'
  'a6ff4e82a92e7dba08f0e6c14ad1d280ad2dbc1d5ebdc7dc70eaa1b7963ddd5d5491fdf4c83cde1bec183b335ed20edaf101ac8bdb3c0f480adc72d41251723b'
  #'74fc72fe0f028e7b495b2a96df26ef9fd76648f2701bbfc2b271f5b55968b82951f1b7232435c2bdf9e92b74a69f0d8cf804c8ef1be7f9c226896cb17ba57166'
  'aa3abf3e68dfb07785e0c2fa63264d2fab8b67946ffb4b93ce8fe044f57e7197c1d9bd4c322f22ac01dab10ff273f178b5eedf0bfd8ad46a7b6bb7dd1398e51a'
  '0a4c47fa2e3e62edfeef4f7d1b94167f26d83ccadb94af6dc467785edd4e9a1c810b05e824abacb1088afc0fe3cc102ef14141fac1d9aac1497855cc8748cf9b'
  '211234dd60995873e00952c29fcb77ee6f1e9519fda5abce0b1f3a26193f580ad0c948482fcc66769abf55e347f95a6e4ba2dde98257e6ddb97b6a18550aff5b'
  '3935bed214408537fe436c6015377561d2429f467f32b6e391068b1a9ef06566de51fba06d4ece393d68d3ba9fdc13f39ecdbdcd543602d308bcb980fa568d51'
  '1ff09abee75ef72397dc0e538b707083fead2491d4573b4e9208a4f08c11b227662bcae4086ab4dd0365422b8b4e0d4c865ba5dc744ee6574ab8605cf9667918'
  'f3fa2ca4016af09e62037424d40377c7270fad498ebe6822f867a3ff4b6ba9473c75d182c1b9ffb9c328086a9e3c99ab81eb396937ccc3f92f611c66712ab85d'
  '0b2ec199c7d772d4cfa6db12a653963727b01efea764fe364bb9138c983c56d1a33cc5e002b7edfeff957118d162e0c53c8d1b038a2f643bca38821b0ee8c3f6'
  '3d47ff65d0e69ec76e7390ab52c33a7ec39e403fc86dd9c0546b8a876ef69f44d60f4d833ac18c007b776a202eb33d08369165670857e718589c6f4f8a51a564'
  '557d015bca7008ce824111f235da67b7e0051a693aaab666e97b78e753ed7928b72274af03d7fde12033986b733d5f996faf2a4feb6ecf53f39accae31334930'
)

b3sums=(
  'b1062781708190c745913221a19e8b70b06884a7af980f20214c27d39517748a'
  'db9e75e396c8f45aacb0e14003aabdcf29b812e468a5a40b371957ffe9c7f52f'
  #'145f9d17920d7b3b1ef935e3a735171ac9783cbd94ee47eec86f3fb96a6a34c6'
  #'86f8ba9e3469c86c2ced236240d9ba9a253d82b8b6732d8592db481d984de258'
  'f76459d09d1cfd92acc212ae1d4fee73b31ab795ff605c8717b3ee0a6fa9dcf9'
  #'bb4b93c1ffa13df6d5d5441646cd6acb49464d5512ee8f36a7bc0e6f5097edb4'
  'adae3429d7e5491ce03d784c4b980c8e9830682708b70eccf4b06cf1e8cebbd2'
  '9976a6c0ee11772d6d146fb5b1ab57f2df57a24158a0c87985a50d65deec52ed'
  '7f766a97ab867f1f7c5c2fc2770c0d7c7831a6422dfbc89e47f69d4d786a233f'
  '087e1f6c13658326117bef1b09693940d67322ea1635136fc6baeeff132cb1b1'
  'd0b5fcb56f4ea074569ef22ff57fafbaa9cd98cbbc4c3f4bf6bbd4ffa48f2fa0'
  '87fa008865bb8b300375e22152de270a4b35ff604070578c152d44727cbca90d'
  'f03929c8964f2df4f4768745322a4c53b4105c2452a5b92c4c6655cf022193a9'
  'cc257ec08d2e8e00a3a30fba5f26e1282e832ff60f0e8e735bc0942425662064'
  'f417610d7bdc942b79ee6fcc59c37e3d68ca09069a021e62a33fabe259dcc3af'
)

install=$pkgname.install

build() {
  cd "${srcdir}/openssh-portable-hpn-${_pkgver}/"

  # fix building if scp is not installed on host
  if [ ! -x /usr/bin/scp ]; then
    patch -Np1 < ${srcdir}/openssh-tests-scp.patch
  fi
  # https://gitweb.gentoo.org/repo/gentoo.git/commit/?id=371794f20c7eb2b88cae2619b6fa3444452aafb4
  #patch -Np1 < ${srcdir}/openssl11.patch

  # not needed anymore, HPN advertises itself properly through an in-place update on 2020-04-21
  #patch -Np1 < ${srcdir}/hpn-banner.patch

  patch -Np1 < ${srcdir}/glibc-2.31.patch

  # double define fixed upstream in 4afe5ad21dd5a9a01cda3007cdd0af5bbe6b608c for 8.3p1-hpn14v22 on 2020-09-24
  #patch -Np1 < ${srcdir}/hpn14v22-globals-cleanup.patch

  autoreconf -fi
  ./configure \
    --prefix=/usr \
    --sbindir=/usr/bin \
    --libexecdir=/usr/lib/hpnssh \
    --sysconfdir=/etc \
    --disable-strip \
    --with-ldns \
    --with-libedit \
    --with-security-key-builtin \
    --with-ssl-engine \
    --with-pam \
    --with-privsep-user=nobody \
    --with-kerberos5=/usr \
    --with-xauth=/usr/bin/xauth \
    --with-mantype=man \
    --with-md5-passwords \
    --with-pid-dir=/run \
    --host="${CHOST}"
  make
}

package_openssh-hpn() {
  cd "${srcdir}/openssh-portable-hpn-${_pkgver}/"

  make DESTDIR="${pkgdir}" install

  #ln -sf hpnssh.1.gz "${pkgdir}"/usr/share/man/man1/slogin.1.gz
  install -Dm644 LICENCE "${pkgdir}/usr/share/licenses/${pkgname}/LICENCE"

  install -Dm644 ../hpnsshdgenkeys.service "${pkgdir}"/usr/lib/systemd/system/hpnsshdgenkeys.service
  install -Dm644 ../hpnsshd@.service "${pkgdir}"/usr/lib/systemd/system/hpnsshd@.service
  install -Dm644 ../hpnsshd.service "${pkgdir}"/usr/lib/systemd/system/hpnsshd.service
  install -Dm644 ../hpnsshd.socket "${pkgdir}"/usr/lib/systemd/system/hpnsshd.socket
  install -Dm644 ../sshd.pam "${pkgdir}"/etc/pam.d/hpnsshd

  install -Dm755 contrib/findssl.sh "${pkgdir}"/usr/bin/hpnfindssl.sh
  install -Dm755 contrib/hpnssh-copy-id "${pkgdir}"/usr/bin/hpnssh-copy-id
  install -Dm644 contrib/hpnssh-copy-id.1 "${pkgdir}"/usr/share/man/man1/hpnssh-copy-id.1

  sed \
    -e '/^#ChallengeResponseAuthentication yes$/c ChallengeResponseAuthentication no' \
    -e '/^#PrintMotd yes$/c PrintMotd no # pam does that' \
    -e '/^#UsePAM no$/c UsePAM yes' \
    -i "${pkgdir}"/etc/hpnssh/sshd_config
}

package_openssh-hpn-shim(){
  provides=('openssh')
  conflicts=('openssh' 'openssh-hpn-git')
  backup=(
    'etc/ssh/ssh_config'
    'etc/ssh/sshd_config'
    'etc/pam.d/sshd'
    'etc/hpnssh/ssh_config'
    'etc/hpnssh/sshd_config'
    'etc/pam.d/hpnsshd'
  )

  cd "${srcdir}/openssh-portable-hpn-${_pkgver}/"

  install -dm0755 "${pkgdir}/usr/bin"; pushd "${pkgdir}/usr/bin"
  for i in findssl.sh scp sftp ssh ssh-add ssh-agent ssh-copy-id ssh-keygen ssh-keyscan sshd; do
    ln -s "hpn${i}" "${i}"
  done; popd

  install -Dm644 ../sshdgenkeys.service "${pkgdir}"/usr/lib/systemd/system/sshdgenkeys.service
  install -Dm644 ../sshd@.service "${pkgdir}"/usr/lib/systemd/system/sshd@.service
  install -Dm644 ../sshd.service "${pkgdir}"/usr/lib/systemd/system/sshd.service
  install -Dm644 ../sshd.socket "${pkgdir}"/usr/lib/systemd/system/sshd.socket
  install -Dm644 ../sshd.pam "${pkgdir}"/etc/pam.d/sshd

  install -Dm644 contrib/hpnssh-copy-id.1 "${pkgdir}"/usr/share/man/man1/ssh-copy-id.1
}
