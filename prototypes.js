{
  "NtAccessCheck": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "pSecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiaredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenericMapping",
        "type": "PGENERIC_MAPPING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrivilegeSet",
        "type": "PPRIVILEGE_SET",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "PrivilegeSetLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "PACCESS_MASK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AccessStatus",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtWorkerFactoryWorkerReady": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WorkerFactoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAcceptConnectPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ServerPortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AlternativeReceivePortHandle",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ConnectionReply",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AcceptConnection",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ServerSharedMemory",
        "type": "PPORT_SECTION_WRITE",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ClientSharedMemory",
        "type": "PPORT_SECTION_READ",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtMapUserPhysicalPagesScatter": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "VirtualAddresses",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfPages",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserPfnArray",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtWaitForSingleObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TimeOut",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCallbackReturn": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "OutputBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "OutputLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Status",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReadFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ByteOffset",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Key",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtDeviceIoControlFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "IoControlCode",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutputBuffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "OutputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtWriteFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ByteOffset",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Key",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtRemoveIoCompletion": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "IoCompletionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyContext",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ApcContext",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtReleaseSemaphore": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SemaphoreHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReleaseCount",
        "type": "LONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousCount",
        "type": "PLONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtReplyWaitReceivePort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortContext",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ReplyMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ReceiveMessage",
        "type": "PPORT_MESSAGE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtReplyPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReplyMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadInformationClass",
        "type": "THREADINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousState",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtClose": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectInformationClass",
        "type": "OBJECT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ObjectInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FileInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileInformationClass",
        "type": "FILE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtEnumerateValueKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Index",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyValueInformationClass",
        "type": "KEY_VALUE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyValueInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResultLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtFindAtom": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "AtomName",
        "type": "PWSTR",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Atom",
        "type": "PUSHORT",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryDefaultLocale": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "UserProfile",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DefaultLocaleId",
        "type": "PLCID",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyInformationClass",
        "type": "KEY_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResultLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryValueKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ValueName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyValueInformationClass",
        "type": "KEY_VALUE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyValueInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResultLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAllocateVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID *",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ZeroBits",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RegionSize",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "AllocationType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Protect",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryInformationProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessInformationClass",
        "type": "PROCESSINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ProcessInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtWaitForMultipleObjects32": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ObjectCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Handles",
        "type": "PHANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WaitType",
        "type": "WAIT_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtWriteFileGather": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "SegmentArray",
        "type": "PFILE_SEGMENT_ELEMENT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ByteOffset",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Key",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TitleIndex",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Class",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Disposition",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtFreeVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID *",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "RegionSize",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "FreeType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtImpersonateClientOfPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Message",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReleaseMutant": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "MutantHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousCount",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenInformationClass",
        "type": "TOKEN_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "TokenInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtRequestWaitReplyPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RequestMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReplyMessage",
        "type": "PPORT_MESSAGE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MemoryInformationClass",
        "type": "MEMORY_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MemoryInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "MemoryInformationLength",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PSIZE_T",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtOpenThreadToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OpenAsSelf",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryInformationThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadInformationClass",
        "type": "THREADINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ThreadInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtOpenProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientId",
        "type": "PCLIENT_ID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtSetInformationFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FileInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileInformationClass",
        "type": "FILE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtMapViewOfSection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ZeroBits",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CommitSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionOffset",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ViewSize",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "InheritDisposition",
        "type": "SECTION_INHERIT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AllocationType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Win32Protect",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAccessCheckAndAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectTypeName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenericMapping",
        "type": "PGENERIC_MAPPING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectCreation",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "PACCESS_MASK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AccessStatus",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "GenerateOnClose",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtUnmapViewOfSection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReplyWaitReceivePortEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortContext",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ReplyMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ReceiveMessage",
        "type": "PPORT_MESSAGE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtTerminateProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ExitStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetEventBoostPriority": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReadFileScatter": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "SegmentArray",
        "type": "PFILE_SEGMENT_ELEMENT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ByteOffset",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Key",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtOpenThreadTokenEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OpenAsSelf",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtOpenProcessTokenEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryPerformanceCounter": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PerformanceCounter",
        "type": "PLARGE_INTEGER",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PerformanceFrequency",
        "type": "PLARGE_INTEGER",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtEnumerateKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Index",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyInformationClass",
        "type": "KEY_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResultLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtOpenFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ShareAccess",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OpenOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDelayExecution": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DelayInterval",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryDirectoryFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FileInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileInformationClass",
        "type": "FILE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnSingleEntry",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestartScan",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQuerySystemInformation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SystemInformationClass",
        "type": "SYSTEM_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SystemInformation",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "SystemInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtOpenSection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryTimer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TimerInformationClass",
        "type": "TIMER_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TimerInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "TimerInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtFsControlFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FsControlCode",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutputBuffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "OutputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtWriteVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfBytesToWrite",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfBytesWritten",
        "type": "PSIZE_T",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtCloseObjectAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "GenerateOnClose",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDuplicateObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SourceProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TargetProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TargetHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Options",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryAttributesFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileInformation",
        "type": "PFILE_BASIC_INFORMATION",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtClearEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReadVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "BufferSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfBytesRead",
        "type": "PSIZE_T",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtOpenEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAdjustPrivilegesToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DisableAllPrivileges",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewState",
        "type": "PTOKEN_PRIVILEGES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "BufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousState",
        "type": "PTOKEN_PRIVILEGES",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtDuplicateToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ExistingTokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EffectiveOnly",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenType",
        "type": "TOKEN_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewTokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtContinue": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ContextRecord",
        "type": "PCONTEXT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TestAlert",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryDefaultUILanguage": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DefaultUILanguageId",
        "type": "PLANGID",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueueApcThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ApcRoutine",
        "type": "PKNORMAL_ROUTINE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ApcArgument1",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcArgument2",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcArgument3",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtYieldExecution": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtAddAtom": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "AtomName",
        "type": "PWSTR",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Atom",
        "type": "PUSHORT",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtCreateEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "EventType",
        "type": "EVENT_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InitialState",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryVolumeInformationFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FsInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FsInformationClass",
        "type": "FSINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateSection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "MaximumSize",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "SectionPageProtection",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AllocationAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtFlushBuffersFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtApphelpCacheControl": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Service",
        "type": "APPHELPCACHESERVICECLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ServiceData",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateProcessEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ParentProcess",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DebugPort",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ExceptionPort",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "JobMemberLevel",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientId",
        "type": "PCLIENT_ID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ThreadContext",
        "type": "PCONTEXT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InitialTeb",
        "type": "PUSER_STACK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CreateSuspended",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtIsProcessInJob": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "JobHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtProtectVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID *",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "RegionSize",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "NewProtect",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OldProtect",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQuerySection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionInformationClass",
        "type": "SECTION_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "SectionInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtResumeThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousSuspendCount",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtTerminateThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExitStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReadRequestData": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Message",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DataEntryIndex",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "BufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfBytesRead",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtCreateFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AllocationSize",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "FileAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ShareAccess",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CreateDisposition",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EaBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "EaLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EventInformationClass",
        "type": "EVENT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EventInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "EventInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtWriteRequestData": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Request",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DataIndex",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResultLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtOpenDirectoryObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DirectoryHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAccessCheckByTypeAndAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectTypeName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrincipalSelfSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AuditType",
        "type": "AUDIT_EVENT_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeList",
        "type": "POBJECT_TYPE_LIST",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectTypeListLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenericMapping",
        "type": "PGENERIC_MAPPING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectCreation",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "PACCESS_MASK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AccessStatus",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "GenerateOnClose",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtWaitForMultipleObjects": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Count",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Handles",
        "type": "PHANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WaitType",
        "type": "WAIT_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtSetInformationObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectInformationClass",
        "type": "OBJECT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCancelIoFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtTraceEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TraceHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FieldSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Fields",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtPowerInformation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "InformationLevel",
        "type": "POWER_INFORMATION_LEVEL",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutputBuffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "OutputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetValueKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ValueName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TitleIndex",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Type",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SystemData",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DataSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCancelTimer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CurrentState",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtSetTimer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DueTime",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TimerApcRoutine",
        "type": "PTIMER_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TimerContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ResumeTimer",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Period",
        "type": "LONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PreviousState",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtAccessCheckByType": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrincipalSelfSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeList",
        "type": "POBJECT_TYPE_LIST",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeListLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenericMapping",
        "type": "PGENERIC_MAPPING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrivilegeSet",
        "type": "PPRIVILEGE_SET",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PrivilegeSetLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "PACCESS_MASK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AccessStatus",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAccessCheckByTypeResultList": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrincipalSelfSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeList",
        "type": "POBJECT_TYPE_LIST",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeListLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenericMapping",
        "type": "PGENERIC_MAPPING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrivilegeSet",
        "type": "PPRIVILEGE_SET",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PrivilegeSetLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "PACCESS_MASK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AccessStatus",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAccessCheckByTypeResultListAndAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectTypeName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrincipalSelfSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AuditType",
        "type": "AUDIT_EVENT_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeList",
        "type": "POBJECT_TYPE_LIST",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectTypeListLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenericMapping",
        "type": "PGENERIC_MAPPING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectCreation",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "PACCESS_MASK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AccessStatus",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "GenerateOnClose",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAccessCheckByTypeResultListAndAuditAlarmByHandle": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PrincipalSelfSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AuditType",
        "type": "AUDIT_EVENT_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectTypeList",
        "type": "POBJECT_TYPE_LIST",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectTypeListLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenericMapping",
        "type": "PGENERIC_MAPPING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectCreation",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "PACCESS_MASK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AccessStatus",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "GenerateOnClose",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAcquireProcessActivityReference": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtAddAtomEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "AtomName",
        "type": "PWSTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Atom",
        "type": "PRTL_ATOM",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAddBootEntry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "BootEntry",
        "type": "PBOOT_ENTRY",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Id",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtAddDriverEntry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DriverEntry",
        "type": "PEFI_DRIVER_ENTRY",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Id",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtAdjustGroupsToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResetToDefault",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewState",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "BufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PreviousState",
        "type": "PTOKEN_GROUPS",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAdjustTokenClaimsAndDeviceGroups": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserResetToDefault",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DeviceResetToDefault",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DeviceGroupsResetToDefault",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewUserState",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "NewDeviceState",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "NewDeviceGroupsState",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "UserBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousUserState",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "DeviceBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousDeviceState",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "DeviceGroupsBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousDeviceGroups",
        "type": "PTOKEN_GROUPS",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "UserReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "DeviceReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "DeviceGroupsReturnBufferLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtAlertResumeThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousSuspendCount",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtAlertThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlertThreadByThreadId": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadId",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAllocateLocallyUniqueId": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Luid",
        "type": "PLUID",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAllocateReserveObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "MemoryReserveHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Type",
        "type": "MEMORY_RESERVE_TYPE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAllocateUserPhysicalPages": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfPages",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "UserPfnArray",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAllocateUuids": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Time",
        "type": "PLARGE_INTEGER",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Range",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Sequence",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Seed",
        "type": "PUCHAR",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAllocateVirtualMemoryEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "lpAddress",
        "type": "PPVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ZeroBits",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "pSize",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "flAllocationType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DataBuffer",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "DataCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcAcceptConnectPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ConnectionPortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PortAttributes",
        "type": "PALPC_PORT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PortContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ConnectionRequest",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ConnectionMessageAttributes",
        "type": "PALPC_MESSAGE_ATTRIBUTES",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "AcceptConnection",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcCancelMessage": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MessageContext",
        "type": "PALPC_CONTEXT_ATTR",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcConnectPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PortName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PortAttributes",
        "type": "PALPC_PORT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RequiredServerSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ConnectionMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "OutMessageAttributes",
        "type": "PALPC_MESSAGE_ATTRIBUTES",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "InMessageAttributes",
        "type": "PALPC_MESSAGE_ATTRIBUTES",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtAlpcConnectPortEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ConnectionPortObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientPortObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PortAttributes",
        "type": "PALPC_PORT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ServerSecurityRequirements",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ConnectionMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferLength",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "OutMessageAttributes",
        "type": "PALPC_MESSAGE_ATTRIBUTES",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "InMessageAttributes",
        "type": "PALPC_MESSAGE_ATTRIBUTES",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtAlpcCreatePort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PortAttributes",
        "type": "PALPC_PORT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtAlpcCreatePortSection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "SectionSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AlpcSectionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ActualSectionSize",
        "type": "PSIZE_T",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAlpcCreateResourceReserve": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MessageSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceId",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAlpcCreateSectionView": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ViewAttributes",
        "type": "PALPC_DATA_VIEW_ATTR",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAlpcCreateSecurityContext": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityAttribute",
        "type": "PALPC_SECURITY_ATTR",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtAlpcDeletePortSection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcDeleteResourceReserve": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceId",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcDeleteSectionView": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ViewBase",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcDeleteSecurityContext": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ContextHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcDisconnectPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcImpersonateClientContainerOfPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Message",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcImpersonateClientOfPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Message",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcOpenSenderProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcOpenSenderThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcQueryInformation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PortInformationClass",
        "type": "ALPC_PORT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortInformation",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtAlpcQueryInformationMessage": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MessageInformationClass",
        "type": "ALPC_MESSAGE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MessageInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtAlpcRevokeSecurityContext": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ContextHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAlpcSendWaitReceivePort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SendMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "SendMessageAttributes",
        "type": "PALPC_MESSAGE_ATTRIBUTES",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ReceiveMessage",
        "type": "PPORT_MESSAGE",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferLength",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ReceiveMessageAttributes",
        "type": "PALPC_MESSAGE_ATTRIBUTES",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtAlpcSetInformation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortInformationClass",
        "type": "ALPC_PORT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAreMappedFilesTheSame": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "File1MappedAsAnImage",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "File2MappedAsFile",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAssignProcessToJobObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "JobHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAssociateWaitCompletionPacket": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WaitCompletionPacketHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoCompletionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TargetObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusInformation",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AlreadySignaled",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtCallEnclave": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Routine",
        "type": "PENCLAVE_ROUTINE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Parameter",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WaitForThread",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnValue",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtCancelIoFileEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoRequestToCancel",
        "type": "PIO_STATUS_BLOCK",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtCancelSynchronousIoFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoRequestToCancel",
        "type": "PIO_STATUS_BLOCK",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtCancelTimer2": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Parameters",
        "type": "PT2_CANCEL_PARAMETERS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCancelWaitCompletionPacket": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WaitCompletionPacketHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RemoveSignaledPacket",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCommitComplete": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCommitEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCommitRegistryTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "RegistryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Wait",
        "type": "BOOL",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCommitTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Wait",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCompactKeys": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Count",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyArray",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCompareObjects": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FirstObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecondObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCompareSigningLevels": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "UnknownParameter1",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter2",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCompareTokens": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FirstTokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecondTokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Equal",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtCompleteConnectPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCompressKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Key",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtConnectPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PortName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityQos",
        "type": "PSECURITY_QUALITY_OF_SERVICE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientView",
        "type": "PPORT_SECTION_WRITE",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ServerView",
        "type": "PPORT_SECTION_READ",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "MaxMessageLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ConnectionInformation",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ConnectionInformationLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtConvertBetweenAuxiliaryCounterAndPerformanceCounter": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "UnknownParameter1",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter2",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter3",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter4",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateDebugObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DebugObjectHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateDirectoryObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DirectoryHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateDirectoryObjectEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DirectoryHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ShadowDirectoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateEnclave": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ZeroBits",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Size",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InitialCommitment",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnclaveType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnclaveInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnclaveInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnclaveError",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtCreateEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "NotificationMask",
        "type": "NOTIFICATION_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentKey",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventPairHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateIRTimer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateIoCompletion": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "IoCompletionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Count",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateJobObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "JobHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateJobSet": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "NumJob",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserJobSet",
        "type": "PJOB_SET_ARRAY",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateKeyTransacted": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TitleIndex",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Class",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Disposition",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtCreateKeyedEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyedEventHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateLowBoxToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ExistingTokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PackageSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CapabilityCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Capabilities",
        "type": "PSID_AND_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "HandleCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Handles",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateMailslotFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MailslotQuota",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaximumMessageSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReadTimeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateMutant": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "MutantHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InitialOwner",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateNamedPipeFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ShareAccess",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CreateDisposition",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NamedPipeType",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReadMode",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CompletionMode",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaximumInstances",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InboundQuota",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutboundQuota",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DefaultTimeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreatePagingFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PageFileName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MinimumSize",
        "type": "PULARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaximumSize",
        "type": "PULARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Priority",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreatePartition": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PartitionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PreferredNode",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreatePort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "MaxConnectionInfoLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaxMessageLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaxPoolUsage",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreatePrivateNamespace": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "NamespaceHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BoundaryDescriptor",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ParentProcess",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InheritObjectTable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DebugPort",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ExceptionPort",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateProfile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProfileHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Process",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ProfileBase",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProfileSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BucketSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProfileSource",
        "type": "KPROFILE_SOURCE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Affinity",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateProfileEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProfileHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Process",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ProfileBase",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProfileSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BucketSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProfileSource",
        "type": "KPROFILE_SOURCE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GroupCount",
        "type": "USHORT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GroupAffinity",
        "type": "PGROUP_AFFINITY",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateRegistryTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "DWORD",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateResourceManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RmGuid",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Description",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateSemaphore": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SemaphoreHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InitialCount",
        "type": "LONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaximumCount",
        "type": "LONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateSymbolicLinkObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "LinkHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "LinkTarget",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateThreadEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "StartRoutine",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Argument",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateFlags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ZeroBits",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "StackSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaximumStackSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AttributeList",
        "type": "PPS_ATTRIBUTE_LIST",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateTimer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TimerType",
        "type": "TIMER_TYPE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateTimer2": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Reserved1",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Reserved2",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Attributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TokenType",
        "type": "TOKEN_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AuthenticationId",
        "type": "PLUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExpirationTime",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "User",
        "type": "PTOKEN_USER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Groups",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Privileges",
        "type": "PTOKEN_PRIVILEGES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Owner",
        "type": "PTOKEN_OWNER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PrimaryGroup",
        "type": "PTOKEN_PRIMARY_GROUP",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DefaultDacl",
        "type": "PTOKEN_DEFAULT_DACL",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TokenSource",
        "type": "PTOKEN_SOURCE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateTokenEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TokenType",
        "type": "TOKEN_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AuthenticationId",
        "type": "PLUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExpirationTime",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "User",
        "type": "PTOKEN_USER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Groups",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Privileges",
        "type": "PTOKEN_PRIVILEGES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserAttributes",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DeviceAttributes",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DeviceGroups",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TokenMandatoryPolicy",
        "type": "PTOKEN_MANDATORY_POLICY",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Owner",
        "type": "PTOKEN_OWNER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PrimaryGroup",
        "type": "PTOKEN_PRIMARY_GROUP",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DefaultDacl",
        "type": "PTOKEN_DEFAULT_DACL",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TokenSource",
        "type": "PTOKEN_SOURCE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Uow",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TmHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IsolationLevel",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IsolationFlags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Description",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateTransactionManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TmHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "LogFileName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CommitStrength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateUserProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ThreadHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ProcessDesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadDesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ThreadObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ProcessFlags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadFlags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessParameters",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CreateInfo",
        "type": "PPS_CREATE_INFO",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "AttributeList",
        "type": "PPS_ATTRIBUTE_LIST",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateWaitCompletionPacket": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WaitCompletionPacketHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateWaitablePort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "MaxConnectionInfoLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaxMessageLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MaxPoolUsage",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateWnfStateName": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "NameLifetime",
        "type": "WNF_STATE_NAME_LIFETIME",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DataScope",
        "type": "WNF_DATA_SCOPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PersistData",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TypeId",
        "type": "PCWNF_TYPE_ID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "MaximumStateSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateWorkerFactory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WorkerFactoryHandleReturn",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "CompletionPortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WorkerProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "StartRoutine",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "StartParameter",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "MaxThreadCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "StackReserve",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "StackCommit",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtDebugActiveProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DebugObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDebugContinue": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DebugObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientId",
        "type": "PCLIENT_ID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ContinueStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteAtom": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Atom",
        "type": "USHORT",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteBootEntry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Id",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteDriverEntry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Id",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteObjectAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "GenerateOnClose",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeletePrivateNamespace": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "NamespaceHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteValueKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ValueName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDeleteWnfStateData": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExplicitScope",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtDeleteWnfStateName": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDisableLastKnownGood": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtDisplayString": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "String",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtDrawText": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "String",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtEnableLastKnownGood": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtEnumerateBootEntries": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtEnumerateDriverEntries": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtEnumerateSystemEnvironmentValuesEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "InformationClass",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "BufferLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtEnumerateTransactionObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "RootObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "QueryType",
        "type": "KTMOBJECT_TYPE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectCursor",
        "type": "PKTMOBJECT_CURSOR",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ObjectCursorLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtExtendSection": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewSectionSize",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtFilterBootOption": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FilterOperation",
        "type": "FILTER_BOOT_OPTION_OPERATION",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ElementType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SystemData",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DataSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtFilterToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ExistingTokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SidsToDisable",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PrivilegesToDelete",
        "type": "PTOKEN_PRIVILEGES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestrictedSids",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "NewTokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtFilterTokenEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SidsToDisable",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PrivilegesToDelete",
        "type": "PTOKEN_PRIVILEGES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestrictedSids",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DisableUserClaimsCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserClaimsToDisable",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DisableDeviceClaimsCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DeviceClaimsToDisable",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DeviceGroupsToDisable",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestrictedUserAttributes",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestrictedDeviceAttributes",
        "type": "PTOKEN_SECURITY_ATTRIBUTES_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestrictedDeviceGroups",
        "type": "PTOKEN_GROUPS",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "NewTokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtFlushBuffersFileEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Parameters",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ParametersSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtFlushInstallUILanguage": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "InstallUILanguage",
        "type": "LANGID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SetComittedFlag",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtFlushInstructionCache": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtFlushKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtFlushProcessWriteBuffers": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtFlushVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "RegionSize",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtFlushWriteBuffer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtFreeUserPhysicalPages": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfPages",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "UserPfnArray",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtFreezeRegistry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimeOutInSeconds",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtFreezeTransactions": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FreezeTimeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThawTimeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtGetCachedSigningLevel": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "File",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "SigningLevel",
        "type": "PSE_SIGNING_LEVEL",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Thumbprint",
        "type": "PUCHAR",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ThumbprintSize",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ThumbprintAlgorithm",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtGetCompleteWnfStateSubscription": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "OldDescriptorStateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "OldSubscriptionId",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "OldDescriptorEventMask",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "OldDescriptorStatus",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "NewDeliveryDescriptor",
        "type": "PWNF_DELIVERY_DESCRIPTOR",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DescriptorSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtGetContextThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadContext",
        "type": "PCONTEXT",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtGetCurrentProcessorNumber": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtGetCurrentProcessorNumberEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcNumber",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtGetDevicePowerState": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Device",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "State",
        "type": "PDEVICE_POWER_STATE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtGetMUIRegistryInfo": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DataSize",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "SystemData",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtGetNextProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewProcessHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtGetNextThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewThreadHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtGetNlsSectionPtr": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionData",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ContextData",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionPointer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "SectionSize",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtGetNotificationResourceManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionNotification",
        "type": "PTRANSACTION_NOTIFICATION",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "NotificationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Asynchronous",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AsynchronousContext",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtGetWriteWatch": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RegionSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserAddressArray",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "EntriesInUserAddressArray",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "Granularity",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtImpersonateAnonymousToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtImpersonateThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ServerThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityQos",
        "type": "PSECURITY_QUALITY_OF_SERVICE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtInitializeEnclave": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnclaveInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnclaveInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnclaveError",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtInitializeNlsFiles": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DefaultLocaleId",
        "type": "PLCID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DefaultCasingTableSize",
        "type": "PLARGE_INTEGER",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtInitializeRegistry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "BootCondition",
        "type": "USHORT",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtInitiatePowerAction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SystemAction",
        "type": "POWER_ACTION",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "LightestSystemState",
        "type": "SYSTEM_POWER_STATE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Asynchronous",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtIsSystemResumeAutomatic": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtIsUILanguageComitted": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtListenPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ConnectionRequest",
        "type": "PPORT_MESSAGE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtLoadDriver": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DriverServiceName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtLoadEnclaveData": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BufferSize",
        "type": "SIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Protect",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PageInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PageInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfBytesWritten",
        "type": "PSIZE_T",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "EnclaveError",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtLoadHotPatch": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "HotPatchName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "LoadFlag",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtLoadKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetKey",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceFile",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtLoadKey2": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetKey",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceFile",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtLoadKeyEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetKey",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceFile",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TrustClassKey",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RootHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "IoStatus",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtLockFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ByteOffset",
        "type": "PULARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "PULARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Key",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FailImmediately",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExclusiveLock",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtLockProductActivationKeys": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "pPrivateVer",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "pSafeMode",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtLockRegistryKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtLockVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RegionSize",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MapType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtMakePermanentObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtMakeTemporaryObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtManagePartition": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PartitionInformationClass",
        "type": "MEMORY_PARTITION_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PartitionInformation",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "PartitionInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtMapCMFModule": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "What",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Index",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CacheIndexOut",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "CacheFlagsOut",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ViewSizeOut",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtMapUserPhysicalPages": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "VirtualAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfPages",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserPfnArray",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtMapViewOfSectionEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SectionOffset",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PPVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ViewSize",
        "type": "PSIZE_T",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "AllocationType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Protect",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DataBuffer",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "DataCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtModifyBootEntry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "BootEntry",
        "type": "PBOOT_ENTRY",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtModifyDriverEntry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DriverEntry",
        "type": "PEFI_DRIVER_ENTRY",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtNotifyChangeDirectoryFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PFILE_NOTIFY_INFORMATION",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CompletionFilter",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WatchTree",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtNotifyChangeDirectoryFileEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CompletionFilter",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WatchTree",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DirectoryNotifyInformationClass",
        "type": "DIRECTORY_NOTIFY_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtNotifyChangeKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "CompletionFilter",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WatchTree",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Asynchronous",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtNotifyChangeMultipleKeys": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "MasterKeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Count",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "SubordinateObjects",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "CompletionFilter",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WatchTree",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Asynchronous",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtNotifyChangeSession": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SessionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ChangeSequenceNumber",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ChangeTimeStamp",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "IO_SESSION_EVENT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewState",
        "type": "IO_SESSION_STATE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousState",
        "type": "IO_SESSION_STATE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Payload",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "PayloadSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentGuid",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtOpenEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventPairHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenIoCompletion": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "IoCompletionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenJobObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "JobHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenKeyEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OpenOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenKeyTransacted": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenKeyTransactedEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OpenOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenKeyedEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyedEventHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenMutant": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "MutantHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenObjectAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectTypeName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GrantedAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Privileges",
        "type": "PPRIVILEGE_SET",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectCreation",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AccessGranted",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "GenerateOnClose",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtOpenPartition": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PartitionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenPrivateNamespace": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "NamespaceHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "BoundaryDescriptor",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenProcessToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtOpenRegistryTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "RegistryHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenResourceManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerGuid",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtOpenSemaphore": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SemaphoreHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenSession": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SessionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenSymbolicLinkObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "LinkHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientId",
        "type": "PCLIENT_ID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtOpenTimer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtOpenTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Uow",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtOpenTransactionManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TmHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "LogFileName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TmIdentity",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "OpenOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtPlugPlayControl": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PnPControlClass",
        "type": "PLUGPLAY_CONTROL_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PnPControlData",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "PnPControlDataLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtPrePrepareComplete": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtPrePrepareEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtPrepareComplete": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtPrepareEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtPrivilegeCheck": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RequiredPrivileges",
        "type": "PPRIVILEGE_SET",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "Result",
        "type": "PBOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtPrivilegeObjectAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleId",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Privileges",
        "type": "PPRIVILEGE_SET",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AccessGranted",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtPrivilegedServiceAuditAlarm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SubsystemName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ServiceName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientToken",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Privileges",
        "type": "PPRIVILEGE_SET",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AccessGranted",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtPropagationComplete": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RequestCookie",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtPropagationFailed": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RequestCookie",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PropStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtPulseEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousState",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryAuxiliaryCounterFrequency": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "lpAuxiliaryCounterFrequency",
        "type": "PULONGLONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryBootEntryOrder": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Ids",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Count",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryBootOptions": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "BootOptions",
        "type": "PBOOT_OPTIONS",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BootOptionsLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryDebugFilterState": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ComponentId",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Level",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryDirectoryFileEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PIO_APC_ROUTINE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FileInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileInformationClass",
        "type": "FILE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "QueryFlags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtQueryDirectoryObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DirectoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnSingleEntry",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RestartScan",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Context",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryDriverEntryOrder": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Ids",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Count",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryEaFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PFILE_FULL_EA_INFORMATION",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnSingleEntry",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EaList",
        "type": "PFILE_GET_EA_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "EaListLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EaIndex",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestartScan",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryFullAttributesFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileInformation",
        "type": "PFILE_NETWORK_OPEN_INFORMATION",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryInformationAtom": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Atom",
        "type": "USHORT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AtomInformationClass",
        "type": "ATOM_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AtomInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "AtomInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationByName": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FileInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileInformationClass",
        "type": "FILE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueryInformationEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentInformationClass",
        "type": "ENLISTMENT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "EnlistmentInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationJobObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "JobHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "JobObjectInformationClass",
        "type": "JOBOBJECTINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "JobObjectInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "JobObjectInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortInformationClass",
        "type": "PORT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PortInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationResourceManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerInformationClass",
        "type": "RESOURCEMANAGER_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ResourceManagerInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformationClass",
        "type": "TRANSACTION_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "TransactionInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationTransactionManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionManagerInformationClass",
        "type": "TRANSACTIONMANAGER_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionManagerInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "TransactionManagerInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInformationWorkerFactory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WorkerFactoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WorkerFactoryInformationClass",
        "type": "WORKERFACTORYINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WorkerFactoryInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "WorkerFactoryInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryInstallUILanguage": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "InstallUILanguageId",
        "type": "PLANGID",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryIntervalProfile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProfileSource",
        "type": "KPROFILE_SOURCE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Interval",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryIoCompletion": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "IoCompletionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoCompletionInformationClass",
        "type": "IO_COMPLETION_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoCompletionInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "IoCompletionInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryLicenseValue": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ValueName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Type",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "SystemData",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "DataSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResultDataSize",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryMultipleValueKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ValueEntries",
        "type": "PKEY_VALUE_ENTRY",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "EntryCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ValueBuffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "BufferLength",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RequiredBufferLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryMutant": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "MutantHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MutantInformationClass",
        "type": "MUTANT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MutantInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "MutantInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryOpenSubKeys": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetKey",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "HandleCount",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryOpenSubKeysEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetKey",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "RequiredSize",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryPortInformationProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtQueryQuotaInformationFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PFILE_USER_QUOTA_INFORMATION",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnSingleEntry",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SidList",
        "type": "PFILE_QUOTA_LIST_INFORMATION",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "SidListLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "StartSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "RestartScan",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQuerySecurityAttributesToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Attributes",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "NumberOfAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQuerySecurityObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityInformation",
        "type": "SECURITY_INFORMATION",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityDescriptor",
        "type": "PSECURITY_DESCRIPTOR",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "LengthNeeded",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQuerySecurityPolicy": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "UnknownParameter1",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter2",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter3",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter4",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter5",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter6",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQuerySemaphore": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SemaphoreHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SemaphoreInformationClass",
        "type": "SEMAPHORE_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SemaphoreInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "SemaphoreInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQuerySymbolicLinkObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "LinkHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "LinkTarget",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "ReturnedLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQuerySystemEnvironmentValue": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "VariableName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "VariableValue",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ValueLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQuerySystemEnvironmentValueEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "VariableName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "VendorGuid",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Value",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ValueLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      },
      {
        "name": "Attributes",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQuerySystemInformationEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SystemInformationClass",
        "type": "SYSTEM_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SystemInformation",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "SystemInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtQueryTimerResolution": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "MaximumTime",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "MinimumTime",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "CurrentTime",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryWnfStateData": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TypeId",
        "type": "PCWNF_TYPE_ID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ExplicitScope",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ChangeStamp",
        "type": "PWNF_CHANGE_STAMP",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "BufferSize",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtQueryWnfStateNameInformation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NameInfoClass",
        "type": "PCWNF_TYPE_ID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExplicitScope",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InfoBuffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "InfoBufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQueueApcThreadEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UserApcReserveHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcRoutine",
        "type": "PKNORMAL_ROUTINE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ApcArgument1",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcArgument2",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcArgument3",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtRaiseException": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ExceptionRecord",
        "type": "PEXCEPTION_RECORD",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ContextRecord",
        "type": "PCONTEXT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FirstChance",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRaiseHardError": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ErrorStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfParameters",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnicodeStringParameterMask",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Parameters",
        "type": "PULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ValidResponseOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Response",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtReadOnlyEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtRecoverEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentKey",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtRecoverResourceManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRecoverTransactionManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRegisterProtocolAddressInformation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManager",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProtocolId",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProtocolInformationSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProtocolInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CreateOptions",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtRegisterThreadTerminatePort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReleaseKeyedEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyedEventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyValue",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtReleaseWorkerFactoryWorker": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WorkerFactoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRemoveIoCompletionEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "IoCompletionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoCompletionInformation",
        "type": "PFILE_IO_COMPLETION_INFORMATION",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Count",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumEntriesRemoved",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRemoveProcessDebug": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DebugObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRenameKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NewName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRenameTransactionManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "LogFileName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExistingTransactionManagerGuid",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReplaceKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "NewFile",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TargetHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OldFile",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReplacePartitionUnit": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetInstancePath",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SpareInstancePath",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtReplyWaitReplyPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReplyMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtRequestPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RequestMessage",
        "type": "PPORT_MESSAGE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtResetEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousState",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtResetWriteWatch": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "RegionSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRestoreKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtResumeProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRevertContainerImpersonation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtRollbackComplete": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtRollbackEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtRollbackRegistryTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "RegistryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Wait",
        "type": "BOOL",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRollbackTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Wait",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRollforwardTransactionManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtSaveKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSaveKeyEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Format",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSaveMergedKeys": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "HighPrecedenceKeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "LowPrecedenceKeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSecureConnectPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "PortName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityQos",
        "type": "PSECURITY_QUALITY_OF_SERVICE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ClientView",
        "type": "PPORT_SECTION_WRITE",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "RequiredServerSid",
        "type": "PSID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ServerView",
        "type": "PPORT_SECTION_READ",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "MaxMessageLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "ConnectionInformation",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "ConnectionInformationLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtSerializeBoot": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtSetBootEntryOrder": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Ids",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Count",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetBootOptions": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "BootOptions",
        "type": "PBOOT_OPTIONS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FieldsToChange",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetCachedSigningLevel": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputSigningLevel",
        "type": "SE_SIGNING_LEVEL",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceFiles",
        "type": "PHANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceFileCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TargetFile",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtSetCachedSigningLevel2": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputSigningLevel",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceFiles",
        "type": "PHANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SourceFileCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TargetFile",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "LevelInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtSetContextThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Context",
        "type": "PCONTEXT",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetDebugFilterState": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ComponentId",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Level",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "State",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetDefaultHardErrorPort": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "PortHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetDefaultLocale": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "UserProfile",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DefaultLocaleId",
        "type": "LCID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetDefaultUILanguage": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DefaultUILanguageId",
        "type": "LANGID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetDriverEntryOrder": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Ids",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Count",
        "type": "PULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetEaFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "EaBuffer",
        "type": "PFILE_FULL_EA_INFORMATION",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EaBufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetHighEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventPairHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetHighWaitLowEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventPairHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetIRTimer": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DueTime",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtSetInformationDebugObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DebugObject",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InformationClass",
        "type": "DEBUGOBJECTINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Information",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtSetInformationEnlistment": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentInformationClass",
        "type": "ENLISTMENT_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "EnlistmentInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationJobObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "JobHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "JobObjectInformationClass",
        "type": "JOBOBJECTINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "JobObjectInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "JobObjectInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeySetInformationClass",
        "type": "KEY_SET_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeySetInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeySetInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationResourceManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ResourceManagerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerInformationClass",
        "type": "RESOURCEMANAGER_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ResourceManagerInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationSymbolicLink": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Class",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationToken": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TokenHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenInformationClass",
        "type": "TOKEN_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TokenInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformationClass",
        "type": "TRANSACTIONMANAGER_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationTransactionManager": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformationClass",
        "type": "TRANSACTION_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TransactionInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "VmInformationClass",
        "type": "VIRTUAL_MEMORY_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfEntries",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "VirtualAddresses",
        "type": "PMEMORY_RANGE_ENTRY",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "VmInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "VmInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetInformationWorkerFactory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WorkerFactoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WorkerFactoryInformationClass",
        "type": "WORKERFACTORYINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WorkerFactoryInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WorkerFactoryInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetIntervalProfile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Interval",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Source",
        "type": "KPROFILE_SOURCE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetIoCompletion": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "IoCompletionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CompletionKey",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "CompletionStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfBytesTransfered",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetIoCompletionEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "IoCompletionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoCompletionPacketHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "KeyContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ApcContext",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "IoStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusInformation",
        "type": "ULONG_PTR",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetLdtEntries": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Selector0",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Entry0Low",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Entry0Hi",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Selector1",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Entry1Low",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Entry1Hi",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetLowEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventPairHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetLowWaitHighEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventPairHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetQuotaInformationFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PFILE_USER_QUOTA_INFORMATION",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetSecurityObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SecurityInformationClass",
        "type": "SECURITY_INFORMATION",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DescriptorBuffer",
        "type": "PSECURITY_DESCRIPTOR",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetSystemEnvironmentValue": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "VariableName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Value",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetSystemEnvironmentValueEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "VariableName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "VendorGuid",
        "type": "LPGUID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Value",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ValueLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Attributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetSystemInformation": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SystemInformationClass",
        "type": "SYSTEM_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SystemInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SystemInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetSystemPowerState": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SystemAction",
        "type": "POWER_ACTION",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MinSystemState",
        "type": "SYSTEM_POWER_STATE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetSystemTime": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SystemTime",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousTime",
        "type": "PLARGE_INTEGER",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtSetThreadExecutionState": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ExecutionState",
        "type": "EXECUTION_STATE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousExecutionState",
        "type": "PEXECUTION_STATE",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtSetTimer2": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "DueTime",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Period",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Parameters",
        "type": "PT2_SET_PARAMETERS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetTimerEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimerHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TimerSetInformationClass",
        "type": "TIMER_SET_INFORMATION_CLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TimerSetInformation",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": true
      },
      {
        "name": "TimerSetInformationLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetTimerResolution": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DesiredResolution",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SetResolution",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CurrentResolution",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtSetUuidSeed": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Seed",
        "type": "PUCHAR",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetVolumeInformationFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "FileSystemInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileSystemInformationClass",
        "type": "FSINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSetWnfProcessNotificationEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "NotificationEvent",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtShutdownSystem": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Action",
        "type": "SHUTDOWN_ACTION",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtShutdownWorkerFactory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WorkerFactoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PendingWorkerCount",
        "type": "PLONG",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtSignalAndWaitForSingleObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "hObjectToSignal",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "hObjectToWaitOn",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "bAlertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "dwMilliseconds",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtSinglePhaseReject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EnlistmentHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtStartProfile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProfileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtStopProfile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProfileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSubscribeWnfStateChange": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ChangeStamp",
        "type": "WNF_CHANGE_STAMP",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "EventMask",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SubscriptionId",
        "type": "PLARGE_INTEGER",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtSuspendProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSuspendThread": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ThreadHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "PreviousSuspendCount",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtSystemDebugControl": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Command",
        "type": "DEBUG_CONTROL_CODE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutputBuffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "OutputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtTerminateEnclave": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "WaitForThread",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtTerminateJobObject": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "JobHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExitStatus",
        "type": "NTSTATUS",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtTestAlert": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtThawRegistry": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtThawTransactions": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtTraceControl": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FunctionCode",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "InputBuffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "InputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutputBuffer",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "OutputBufferLength",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ReturnLength",
        "type": "PULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtTranslateFilePath": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "InputFilePath",
        "type": "PFILE_PATH",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutputType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "OutputFilePath",
        "type": "PFILE_PATH",
        "in": false,
        "out": true,
        "optional": true
      },
      {
        "name": "OutputFilePathLength",
        "type": "PULONG",
        "in": true,
        "out": true,
        "optional": true
      }
    ]
  },
  "NtUmsThreadYield": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SchedulerParam",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUnloadDriver": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DriverServiceName",
        "type": "PUNICODE_STRING",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUnloadKey": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DestinationKeyName",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUnloadKey2": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetKey",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUnloadKeyEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TargetKey",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Event",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtUnlockFile": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "IoStatusBlock",
        "type": "PIO_STATUS_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ByteOffset",
        "type": "PULARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "PULARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Key",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUnlockVirtualMemory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID *",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "NumberOfBytesToUnlock",
        "type": "PSIZE_T",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "LockType",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUnmapViewOfSectionEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ProcessHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "BaseAddress",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Flags",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUnsubscribeWnfStateChange": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtUpdateWnfStateData": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "StateName",
        "type": "PCWNF_STATE_NAME",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Buffer",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "TypeId",
        "type": "PCWNF_TYPE_ID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ExplicitScope",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "MatchingChangeStamp",
        "type": "WNF_CHANGE_STAMP",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "CheckStamp",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtVdmControl": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Service",
        "type": "VDMSERVICECLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ServiceData",
        "type": "PVOID",
        "in": true,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtWaitForAlertByThreadId": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "Handle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtWaitForDebugEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DebugObjectHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "WaitStateChange",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtWaitForKeyedEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "KeyedEventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Key",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Alertable",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Timeout",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtWaitForWorkViaWorkerFactory": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "WorkerFactoryHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "MiniPacket",
        "type": "PVOID",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtWaitHighEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtWaitLowEventPair": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtAcquireCMFViewOwnership": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TimeStamp",
        "type": "BOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "TokenTaken",
        "type": "BOOLEAN",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "ReplaceExisting",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCancelDeviceWakeupRequest": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DeviceHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtClearAllSavepointsTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtClearSavepointTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SavePointId",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRollbackSavepointTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SavePointId",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtSavepointTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Flag",
        "type": "BOOLEAN",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "SavePointId",
        "type": "ULONG",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtSavepointComplete": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "TransactionHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "TmVirtualClock",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      }
    ]
  },
  "NtCreateSectionEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SectionHandle",
        "type": "PHANDLE",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "DesiredAccess",
        "type": "ACCESS_MASK",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ObjectAttributes",
        "type": "POBJECT_ATTRIBUTES",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "MaximumSize",
        "type": "PLARGE_INTEGER",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "SectionPageProtection",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "AllocationAttributes",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "FileHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "ExtendedParameters",
        "type": "PMEM_EXTENDED_PARAMETER",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ExtendedParametersCount",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtCreateCrossVmEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtGetPlugPlayEvent": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "EventHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Context",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": true
      },
      {
        "name": "EventBlock",
        "type": "PPLUGPLAY_EVENT_BLOCK",
        "in": false,
        "out": true,
        "optional": false
      },
      {
        "name": "EventBufferSize",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtListTransactions": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtMarshallTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtPullTransaction": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtReleaseCMFViewOwnership": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtWaitForWnfNotifications": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtStartTm": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": []
  },
  "NtSetInformationProcess": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DeviceHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessInformationClass",
        "type": "PROCESSINFOCLASS",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ProcessInformation",
        "type": "PVOID",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "Length",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRequestDeviceWakeup": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "DeviceHandle",
        "type": "HANDLE",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtRequestWakeupLatency": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "LatencyTime",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtQuerySystemTime": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "SystemTime",
        "type": "PLARGE_INTEGER",
        "in": false,
        "out": true,
        "optional": false
      }
    ]
  },
  "NtManageHotPatch": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "UnknownParameter1",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter2",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter3",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "UnknownParameter4",
        "type": "ULONG",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
  "NtContinueEx": {
    "type": "NTSTATUS",
    "lib": "ntdll.dll",
    "params": [
      {
        "name": "ContextRecord",
        "type": "PCONTEXT",
        "in": true,
        "out": false,
        "optional": false
      },
      {
        "name": "ContinueArgument",
        "type": "PKCONTINUE_ARGUMENT",
        "in": true,
        "out": false,
        "optional": false
      }
    ]
  },
	"RtlCreateUserThread": {
		"type": "NTSTATUS",
		"lib": "ntdll.dll",
		"params": [
			{
				"name": "ProcessHandle",
				"type": "HANDLE",
				"in": true,
				"out": false,
				"optional": false
			},
			{
				"name": "SecurityDescriptor",
				"type": "PSECURITY_DESCRIPTOR",
				"in": true,
				"out": false,
				"optional": true
			},
			{
				"name": "CreateSuspended",
				"type": "BOOLEAN",
				"in": true,
				"out": false,
				"optional": false
			},
			{
				"name": "StackZeroBits",
				"type": "ULONG",
				"in": true,
				"out": false,
				"optional": false
			},
			{
				"name": "StackReserved",
				"type": "PULONG",
				"in": true,
				"out": true,
				"optional": false
			},
			{
				"name": "StackCommit",
				"type": "PULONG",
				"in": true,
				"out": true,
				"optional": false
			},
			{
				"name": "StartAddress",
				"type": "PVOID",
				"in": true,
				"out": false,
				"optional": false
			},
			{
				"name": "StartParameter",
				"type": "PVOID",
				"in": true,
				"out": false,
				"optional": true
			},
			{
				"name": "ThreadHandle",
				"type": "PHANDLE",
				"in": false,
				"out": true,
				"optional": false
			},
			{
				"name": "ClientID",
				"type": "PCLIENT_ID",
				"in": false,
				"out": true,
				"optional": false
			}
		]
	}
}