# Maintainer (Arch): Dave Reisner <dreisner@archlinux.org>
# Maintainer (Arch): Tom Gundersen <teg@jklm.no>
# Maintainer: Márcio Silva <coadde@parabola.nu>
# Maintainer: André Silva <emulatorman@parabola.nu>

_pkgbase=systemd
pkgbase=systemd-knock
pkgname=('systemd-knock' 'libsystemd-knock' 'systemd-knock-sysvcompat')
pkgver=228
pkgrel=3
arch=('i686' 'x86_64' 'armv7h')
url="http://www.freedesktop.org/wiki/Software/systemd"
makedepends=('acl' 'cryptsetup' 'docbook-xsl' 'gperf' 'lz4' 'xz' 'pam' 'libelf'
             'intltool' 'iptables' 'kmod' 'libcap' 'libidn' 'libgcrypt'
             'libmicrohttpd' 'libxslt' 'util-linux' 'linux-libre-api-headers'
             'python-lxml' 'quota-tools' 'shadow' 'git')
[ "$CARCH" != "armv7h" ] && makedepends+=('gnu-efi-libs')
options=('strip' 'debug')
source=("git://github.com/systemd/systemd.git#tag=v$pkgver"
        #'0001-adds-TCP-Stealth-support-to-systemd.patch::https://gnunet.org/sites/default/files/systemd-knock-patch.diff'
        "https://repo.parabola.nu/other/knock/patches/systemd/0001-adds-TCP-Stealth-support-to-systemd-221.patch"
        "https://repo.parabola.nu/other/systemd-knock/splash-parabola.bmp"
        'initcpio-hook-udev'
        'initcpio-install-systemd'
        'initcpio-install-udev'
        'parabola.conf'
        'loader.conf'
        'gnu+linux.patch')
md5sums=('SKIP'
         '936208db8995db77efbb388735f950af'
         'db7c5e4aaa501c1af4301e011f4f5966'
         '90ea67a7bb237502094914622a39e281'
         '976c5511b6493715e381f43f16cdb151'
         '1b3aa3a0551b08af9305d33f85b5c2fc'
         '36ee74767ac8734dede1cbd0f4f275d7'
         '9b9f4a58e4c4009bf5290c5b297600c3'
         'd37895215ef74e172c594aebe1ba23cb')

prepare() {
  cd "$_pkgbase"

  # sd-ndisc: drop RA packets from non-link-local addresses
  # https://github.com/systemd/systemd/commit/3ccd31635353
  # https://github.com/systemd/systemd/issues/1866
  git cherry-pick -n 3ccd31635353

  # networkd: link - do not drop config for loopback device
  # https://github.com/systemd/systemd/commit/e5d44b34cca3
  # https://github.com/systemd/systemd/issues/2023
  git cherry-pick -n e5d44b34cca3

  # Rename "Linux" -> "GNU/Linux"
  patch -Np1 -i "$srcdir/gnu+linux.patch"
  sed -i '\|os_name| s|Linux|GNU/Linux|' src/journal-remote/journal-gatewayd.c
  sed -i '\|pretty_name| s|Linux|GNU/Linux|' src/analyze/analyze.c src/core/main.c src/firstboot/firstboot.c
  sed -i '\|PRETTY_NAME| s|Linux|GNU/Linux|' src/kernel-install/90-loaderentry.install

  # Rename "Linux Boot Manager" -> "Systemd Boot Manager"
  sed -i 's|Linux Boot Manager|Systemd Boot Manager|' src/boot/bootctl.c

  patch -Np1 <../0001-adds-TCP-Stealth-support-to-systemd-221.patch

  ./autogen.sh
}

build() {
  cd "$_pkgbase"

  local timeservers=({0..3}.arch.pool.ntp.org)

  if [ "$CARCH" = "armv7h" ]; then
    LDFLAGS+=" -Wl,-fuse-ld=bfd"
    CFLAGS+=" -fno-lto"
    CXXFLAGS+=" -fno-lto"
  else
    extra=--enable-gnuefi
  fi

  ./configure \
      --libexecdir=/usr/lib \
      --localstatedir=/var \
      --sysconfdir=/etc \
      --enable-lz4 \
      --enable-compat-libs \
      --enable-tcp-stealth \
      --disable-audit \
      --disable-ima \
      --with-sysvinit-path= \
      --with-sysvrcnd-path= \
      --with-ntp-servers="${timeservers[*]}" \
      $extra

  make
}

package_systemd-knock() {
  pkgdesc="system and service manager with support for stealth TCP sockets (Parabola rebranded)"
  license=('GPL2' 'LGPL2.1')
  depends=('acl' 'bash' 'dbus' 'iptables' 'kbd' 'kmod' 'hwids' 'libcap'
           'libgcrypt' "libsystemd=$pkgver" 'libidn' 'lz4' 'pam' 'libelf' 'libseccomp'
           'util-linux' 'xz')
  provides=('nss-myhostname' "systemd-tools=$pkgver" "udev=$pkgver" "systemd=$pkgver")
  replaces=('nss-myhostname' 'systemd-tools' 'udev')
  conflicts=('nss-myhostname' 'systemd-tools' 'udev' 'systemd')
  optdepends=('cryptsetup: required for encrypted block devices'
              'libmicrohttpd: remote journald capabilities'
              'quota-tools: kernel-level quota management'
              'systemd-knock-sysvcompat: symlink package to provide sysvinit binaries'
              'polkit: allow administration as unprivileged user')
  backup=(etc/dbus-1/system.d/org.freedesktop.systemd1.conf
          etc/dbus-1/system.d/org.freedesktop.hostname1.conf
          etc/dbus-1/system.d/org.freedesktop.login1.conf
          etc/dbus-1/system.d/org.freedesktop.locale1.conf
          etc/dbus-1/system.d/org.freedesktop.machine1.conf
          etc/dbus-1/system.d/org.freedesktop.timedate1.conf
          etc/dbus-1/system.d/org.freedesktop.import1.conf
          etc/dbus-1/system.d/org.freedesktop.network1.conf
          etc/pam.d/systemd-user
          etc/systemd/bootchart.conf
          etc/systemd/coredump.conf
          etc/systemd/journald.conf
          etc/systemd/journal-remote.conf
          etc/systemd/journal-upload.conf
          etc/systemd/logind.conf
          etc/systemd/system.conf
          etc/systemd/timesyncd.conf
          etc/systemd/resolved.conf
          etc/systemd/user.conf
          etc/udev/udev.conf)
  install="systemd.install"

  make -C "$_pkgbase" DESTDIR="$pkgdir" install

  # don't write units to /etc by default. some of these will be re-enabled on
  # post_install.
  rm -r "$pkgdir/etc/systemd/system/"*.wants

  # get rid of RPM macros
  rm -r "$pkgdir/usr/lib/rpm"

  # add back tmpfiles.d/legacy.conf
  install -m644 "$_pkgbase/tmpfiles.d/legacy.conf" "$pkgdir/usr/lib/tmpfiles.d"

  # Replace dialout/tape/cdrom group in rules with uucp/storage/optical group
  sed -i 's#GROUP="dialout"#GROUP="uucp"#g;
          s#GROUP="tape"#GROUP="storage"#g;
          s#GROUP="cdrom"#GROUP="optical"#g' "$pkgdir"/usr/lib/udev/rules.d/*.rules
  sed -i 's/dialout/uucp/g;
          s/tape/storage/g;
          s/cdrom/optical/g' "$pkgdir"/usr/lib/sysusers.d/basic.conf

  # add mkinitcpio hooks
  install -Dm644 "$srcdir/initcpio-install-systemd" "$pkgdir/usr/lib/initcpio/install/systemd"
  install -Dm644 "$srcdir/initcpio-install-udev" "$pkgdir/usr/lib/initcpio/install/udev"
  install -Dm644 "$srcdir/initcpio-hook-udev" "$pkgdir/usr/lib/initcpio/hooks/udev"

  # ensure proper permissions for /var/log/journal. This is only to placate
  chown root:systemd-journal "$pkgdir/var/log/journal"
  chmod 2755 "$pkgdir/var/log/journal"

  # we'll create this on installation
  rmdir "$pkgdir/var/log/journal/remote"

  # fix pam file
  sed 's|system-auth|system-login|g' -i "$pkgdir/etc/pam.d/systemd-user"

  # ship default policy to leave services disabled
  echo 'disable *' >"$pkgdir"/usr/lib/systemd/system-preset/99-default.preset

  ### manpages shipped with systemd-sysvcompat
  rm "$pkgdir"/usr/share/man/man8/{telinit,halt,reboot,poweroff,runlevel,shutdown}.8

  ### runtime libraries shipped with libsystemd
  rm "$pkgdir"/usr/lib/lib{nss,systemd,udev}*.so*

  # add example bootctl configuration
  install -Dm644 "$srcdir/parabola.conf" "$pkgdir"/usr/share/systemd/bootctl/parabola.conf
  install -Dm644 "$srcdir/loader.conf" "$pkgdir"/usr/share/systemd/bootctl/loader.conf
  install -Dm644 "$srcdir/splash-parabola.bmp" "$pkgdir"/usr/share/systemd/bootctl/splash-parabola.bmp
}

package_libsystemd-knock() {
  pkgdesc="systemd client libraries with support for stealth TCP sockets"
  depends=('glibc' 'libgcrypt' 'lz4' 'xz')
  license=('GPL2')
  provides=('libsystemd.so' 'libsystemd-daemon.so' 'libsystemd-id128.so'
            'libsystemd-journal.so' 'libsystemd-login.so' 'libudev.so' "libsystemd=$pkgver")
  conflicts=('libsystemd')

  make -C "$_pkgbase" DESTDIR="$pkgdir" install-libLTLIBRARIES
}

package_systemd-knock-sysvcompat() {
  pkgdesc="sysvinit compat for systemd-knock"
  license=('GPL2')
  provides=("systemd-sysvcompat=$pkgver")
  conflicts=('sysvinit' 'systemd-sysvcompat')
  depends=('systemd-knock')

  install -dm755 "$pkgdir"/usr/share/man/man8
  cp -d --no-preserve=ownership,timestamp \
    "$_pkgbase"/man/{telinit,halt,reboot,poweroff,runlevel,shutdown}.8 \
    "$pkgdir"/usr/share/man/man8

  install -dm755 "$pkgdir/usr/bin"
  for tool in runlevel reboot shutdown poweroff halt telinit; do
    ln -s 'systemctl' "$pkgdir/usr/bin/$tool"
  done

  ln -s '../lib/systemd/systemd' "$pkgdir/usr/bin/init"
}

# vim: ft=sh syn=sh et
