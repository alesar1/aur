auth      required    pam_unix.so
auth      required    pam_env.so

account   required    pam_access.so
account   required    pam_unix.so
account   required    pam_time.so

session    required   pam_loginuid.so
session   required    pam_limits.so
session   required    pam_unix.so
